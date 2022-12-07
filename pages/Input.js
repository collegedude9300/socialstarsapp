// import useRef, useState and useContext.
import { useRef, useState, useContext } from "react";
// import Context to get shared data from react context.
import Context from '../Context';

// import uuid to generate id for posts.
import { v4 as uuidv4 } from "uuid";

function InputBox() {
  // uploaded image state.
  const [imageToPost, setImageToPost] = useState(null);

  // input ref and file ref to get input value and uploaded file.
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);

  // get shared data from React context.
  const { user, setIsLoading, wallPosts, setWallPosts } = useContext(Context);

  const updateWallPosts = (post) => {
    if (post) {
      const updatedwallPosts = [...wallPosts, post];
      setWallPosts(updatedwallPosts.sort((a,b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      }));
    }
  }

  /**
   * send post to Firebase
   * @param {*} e 
   * @returns 
   */
  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    // show loading indicator.
    setIsLoading(true);
    // generate uuid for the post.
    const postUuid = uuidv4();
    // create request payload.
    const post = {
      id: postUuid,
      message: inputRef.current.value,
      timestamp: new Date().toString(),
      createdBy: user.email.substring(0, user.email.indexOf('@')),
      userAvatar: user.avatar
    }


  /**
   * get the uploaded image.
   * @param {*} e 
   */
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  /**
   * remove image from the UI.
   */
  const removeImage = () => {
    filepickerRef.current.value = null;
    setImageToPost(null);
  };

  return (
    <div className="inputbox__container">
      <div className="inputbox__wrapper">
        <img className="inputbox__useravatar" src={user.avatar} />
        <form className="inputbox__inputcontainer">
          <input className="inputbox__input"
            type="text"
            placeholder={`What's on your mind ${""}?`}
            ref={inputRef}/>
          <button hidden onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      {imageToPost && (
        <div onClick={removeImage} className="inputbox__imgcontainer">
          <img className="inputbox__img" src={imageToPost} alt="" />
          <svg className="inputbox__imgremove" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="24" height="24" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      )}

      <div className="inputbox__footer">
        <div className="inputIcon inputbox__footer-item">
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/7ml5sBBNykf.png")',
              backgroundPosition: "0px 0px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="inputbox__footer-item-title">Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon inputbox__footer-item"
        >
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/7ml5sBBNykf.png")',
              backgroundPosition: "0px -175px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="inputbox__footer-item-title">Photo/Video</p>
          <input
            onChange={addImageToPost}
            ref={filepickerRef}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon inputbox__footer-item">
          <i
            data-visualcompletion="css-img"
            className="hu5pjgll lzf7d6o1"
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/7ml5sBBNykf.png")',
              backgroundPosition: "0px -25px",
              backgroundSize: "auto",
              width: "24px",
              height: "24px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
          <p className="inputbox__footer-item-title">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}
}
export default InputBox;