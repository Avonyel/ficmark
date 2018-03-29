import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='grid'>
                <div className='sidebar'>
                    <div>
                        <input name='searchbox' type='text' />
                    </div>
                    <div className='tag-group'>
                        <span>Tag Group Name</span>
                    </div>
                    <div className='tag-group'>
                        <span>Tag Group Name</span>
                        <ul>
                            <li>Tag 1</li>
                            <li>Tag 2</li>
                            <li>Tag 3</li>
                            <li>Tag 4</li>
                            <li>Tag 5</li>
                        </ul>
                    </div>
                    <div className='tag-group'>
                        <span>Tag Group Name</span>
                    </div>
                </div>
                <div className='main'>
                    <div className='link-block'>
                        <div>
                            <h2>Title of Link</h2>
                            <a href=''>http://url.whatever.com/part-1</a>
                        </div>
                        <div className='body'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Tag 1</li>
                                <li>Tag 2</li>
                                <li>Tag 3</li>
                                <li>Tag 4</li>
                                <li>Tag 5</li>
                            </ul>
                        </div>
                    </div>
                    <div className='link-block'>
                        <div>
                            <h2>Title of Link</h2>
                            <a href=''>http://url.whatever.com/part-1</a>
                        </div>
                        <div className='body'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Tag 1</li>
                                <li>Tag 2</li>
                                <li>Tag 3</li>
                                <li>Tag 4</li>
                                <li>Tag 5</li>
                            </ul>
                        </div>
                    </div>
                    <div className='link-block'>
                        <div>
                            <h2>Title of Link</h2>
                            <a href=''>http://url.whatever.com/part-1</a>
                        </div>
                        <div className='body'>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className='footer'>
                            <ul>
                                <li>Tag 1</li>
                                <li>Tag 2</li>
                                <li>Tag 3</li>
                                <li>Tag 4</li>
                                <li>Tag 5</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;