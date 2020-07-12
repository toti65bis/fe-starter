import React from 'react';
import '../../../public/static/assets/sass/app.scss';

const Message = props => <p className="example">{props.children}</p>;

Message.displayName = 'Message';

export default Message;