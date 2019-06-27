/**
 * @author Kuitos
 * @since 2019-05-16
 */

import React from 'react';
import style from './index.less';

export default function Framework(props) {

    const { content, loading } = props;

    function goto(title, href) {
        window.history.pushState({}, title, href);
    }

    return (
        <>
            <header className={style.header}>
                <nav>
                    <ol>
                        <li><a href="javascript: void 0" onClick={() => goto('reactJs', '/reactJs')}>reactJs</a></li>
                        <li><a href="javascript: void 0" onClick={() => goto('reactapp', '/reactapp')}>reactapp</a></li>
                        <li><a href="javascript: void 0" onClick={() => goto('reactTs', '/reactTs')}>reactTs</a></li>
                    </ol>
                </nav>
            </header>
            <div dangerouslySetInnerHTML={{ __html: content }} className={style.appContainer} />
        </>

    );
}
