import React from 'react'

class Content extends React.Component {
    render() {
        return <div>
            <h1>I'm page header</h1>
            <div>
                <p>I'm staying at the begining of the page content</p>
                <div>
                    <span>I'm user logo container</span>
                    <span>I'm user name container</span>
                </div>
                <h2>I'm next section header</h2>
                <section>
                    <article>I'm awesome article</article>
                    <ul>
                        <li>I'm article item</li>
                        <li>I'm article item with <b>bold element</b></li>
                    </ul>
                </section>
            </div>
        </div>
    }
}

export default Content;