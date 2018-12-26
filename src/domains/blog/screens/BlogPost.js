import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { mapNavigationParams } from 'lib/utils/navigation';
import {
  Title,
  Caption,
} from 'lib/components';

import BlogViewContainer from 'domains/blog/components/BlogViewContainer';
import { ReBase } from 'lib/firebase';
import { formatDate } from 'lib/utils/date';

export class BlogPost extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  state = {
    post: null
  }

  componentWillMount() {
    ReBase.syncDoc(
      `posts/${this.props.id}`,
      {
        context: this,
        state: 'post',
        // then: this.onPost,
      },
    );
  }

  onPost = post => this.setState({ post })

  onChangeBody = ({ target: { value }}) =>
    this.setState(s => ({ post: { ...s.post, body: value } }))

  render() {
    const { post } = this.state;
    console.log({ post });

    if (!post) {
      return null;
    }

    return (
      <BlogViewContainer>
        <Title>{post.title}</Title>
        <Caption>{formatDate(post.date)}</Caption>
        <textarea
          type="text"
          value={post.body}
          onChange={this.onChangeBody}
          rows="12"
        />
        <ReactMarkdown source={post.body} />
      </BlogViewContainer>
    );
  }
}

export default mapNavigationParams(BlogPost);
