import React from 'react';
import LinkScroll from 'react-linkscroll';

class BackToTop extends React.Component {
    render () {
        return (
            <div className="backToTop">
                <LinkScroll href="#top" duration="1000"><span className="glyphicon glyphicon-chevron-up backToTop" aria-hidden="true"></span></LinkScroll>
            </div>
        );
    }
};

export default BackToTop; 


/*
<br />
                <LinkScroll href="#top" duration="1000">Back to Top</LinkScroll>\
                
*/