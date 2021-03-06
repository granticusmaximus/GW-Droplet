import React, { useState } from "react";
import { fire } from "../Firebase/fire";
import { AuthUserContext } from '../Sessions';
import error from '../../assets/img/lockchain.png'

const labelStyles = {
  display: "block",
  marginBottom: 4,
  color: "#1B242F"
};

const inputStyles = {
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem"
};
const NewPost = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NewPostAuth /> : <NewPostNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>

);

const NewPostNonAuth = () => (
  <>
  <center><h1>Ooooops</h1></center>
  <center><img src={error} alt={"No Access"} height="50%" width="50%" /> </center>
  <center><p>Its seems you are trying to access something you are not suppose to</p></center>
  </>
)
const NewPostAuth = ({ history }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [coverImageAlt, setCoverImageAlt] = useState("");
  const [content, setContent] = useState("");

  const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };

    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    

    return {
      formatted: `${year}-${month}`,
      pretty: now.toLocaleDateString("en-US", options)
    };
  };

  const createPost = () => {
    const date = generateDate();
    const newPost = {
      title,
      dateFormatted: date.formatted,
      datePretty: date.pretty,
      slug,
      author,
      coverImage,
      coverImageAlt,
      content
    };
    fire()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .set(newPost)
      .then(() => history.push(`/admin`));
  };

  return (
    <div className='container'>
      <h1 className='pageHeader'>Create a new post</h1>
      <section style={{ margin: "2rem 0" }}>
        <label style={labelStyles} htmlFor="title-field">
          Title
        </label>
        <input
          style={inputStyles}
          id="title-field"
          type="text"
          value={title}
          onChange={({ target: { value } }) => {
            setTitle(value);
          }}
        />

        <label style={labelStyles} htmlFor="slug-field">
          Slug
        </label>
        <input
          style={inputStyles}
          id="slug-field"
          type="text"
          value={slug}
          onChange={({ target: { value } }) => {
            setSlug(value);
          }}
        />

        <label style={labelStyles} htmlFor="author-field">
          Author
        </label>
        <input
          style={inputStyles}
          id="author-field"
          type="text"
          value={author}
          onChange={({ target: { value } }) => {
            setAuthor(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-field">
          Cover image
        </label>
        <input
          style={inputStyles}
          id="cover-image-field"
          type="text"
          value={coverImage}
          onChange={({ target: { value } }) => {
            setCoverImage(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-alt-field">
          Cover image alt
        </label>
        <input
          style={inputStyles}
          id="cover-image-alt-field"
          type="text"
          value={coverImageAlt}
          onChange={({ target: { value } }) => {
            setCoverImageAlt(value);
          }}
        />


        <label style={labelStyles} htmlFor="content-field">
          Content
        </label>
        <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={content}
          onChange={({ target: { value } }) => {
            setContent(value);
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.9rem"
            }}
            onClick={createPost}
          >
            Create
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewPost;