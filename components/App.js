import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
        <div>
            <div>
                <Header />
                {this.props.children}
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
  }
})

