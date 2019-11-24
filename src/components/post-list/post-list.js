import React from 'react';
import './post-list.css';

import PostListItem from '../post-list-item';
import { ListGroup, ListGroupItem} from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <ListGroupItem key={id}>
                <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
            </ListGroupItem>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;