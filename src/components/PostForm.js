import React, {Component} from 'react';



class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {location: '', title: '', text: ''}
  }


render (){
  return (
    form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          placeholder='Your name...'
          style={ style.commentFormAuthor}
          value={ this.state.author }
          onChange={ this.handleAuthorChange } />
        <input
          type='text'
          placeholder='Say something...'
          style={ style.commentFormText}
          value={ this.state.text }
          onChange={ this.handleTextChange } />
        <input
          type='submit'
          style={ style.commentFormPost }
          value='post'/>
      </form>
  )
}



}



export default PostForm
