import React, { useEffect, useRef } from 'react';
import parse, { domToReact } from 'html-react-parser';
import Link from './link';
import _ from 'lodash';

// Custom component to handle dynamic script tags
function DynamicScript({ children, ...props }) {
    const scriptRef = useRef(null);

    useEffect(() => {
        if (scriptRef.current) {
            const script = document.createElement('script');
            // Copy all attributes
            Object.keys(props).forEach(key => {
                script.setAttribute(key, props[key]);
            });
            // Set inline content if present
            if (children) {
                script.textContent = typeof children === 'string' ? children : '';
            }
            scriptRef.current.parentNode.replaceChild(script, scriptRef.current);
        }
    }, []);

    return <script ref={scriptRef} {...props}>{children}</script>;
}

export default function htmlToReact(html) {
    if (!html) {
        return null;
    }
    return parse(html, {
        replace: (domNode) => {
            if (domNode.type === 'script') {
                const children = domNode.children && domNode.children.length > 0
                    ? domNode.children.map(child => child.data || '').join('')
                    : null;
                return <DynamicScript {...domNode.attribs}>{children}</DynamicScript>;
            } else if (domNode.type === 'tag' && domNode.name === 'a') {
                const href = domNode.attribs.href;
                const props = _.omit(domNode.attribs, 'href');
                // use Link only if there are no custom attributes like style, class, and what's not that might break react
                if (_.isEmpty(props)) {
                    return <Link to={href} {...props}>{domToReact(domNode.children)}</Link>;
                }
            }
        }
    });
};
