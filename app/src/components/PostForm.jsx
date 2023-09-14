// import { FC, ReactNode, useState } from "react";
// import { Button } from "src/components/Button";
// import { useBlog } from "src/context/Blog";

// export const PostForm = (props) => {
//   const { user } = useBlog();
//   const {
//     onSubmit,
//     postTitle,
//     postContent,
//     setPostContent,
//     setPostTitle,
//     formHeader,
//     buttonText = "Post",
//   } = props;
//   const [loading, setLoading] = useState(false);

//   return (
//     <div className="rounded-lg py-4 px-6 bg- flex flex-col ">
//       {formHeader}
//       <input
//         value={postTitle}
//         onChange={(e) => setPostTitle(e.target.value)}
//         type="text"
//         placeholder="Post title"
//         className="bg-white rounded-3xl h-10 px-4 black"
//       />
//       <textarea
//         value={postContent}
//         onChange={(e) => setPostContent(e.target.value)}
//         name="content"
//         id="content-area"
//         rows={3}
//         placeholder="Describe your post..."
//         className="bg-white rounded-xl px-4 py-2 mt-3 black"
//       ></textarea>
//       <Button
//         className="mt-3"
//         disabled={!user}
//         loading={loading}
//         onClick={async () => {
//           setLoading(true);
//           await onSubmit();
//           setLoading(false);
//         }}
//       >
//         {buttonText}
//       </Button>
//     </div>
//   );
// };



import { FC, ReactNode, useState } from "react";
import { Button } from "src/components/Button";
import { useBlog } from "src/context/Blog";

export const PostForm = (props) => {
  const { user } = useBlog();
  const {
    onSubmit,
    postTitle,
    postContent,
    setPostContent,
    setPostTitle,
    formHeader,
    buttonText = "Post",
  } = props;
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [imageIPFSHash, setImageIPFSHash] = useState(""); // State to store the IPFS hash of the uploaded image

  // Function to handle image file selection
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div className="rounded-lg py-10 px-10 bg- flex flex-col ">
      {formHeader}
      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        type="text"
        placeholder="Post title"
        className="bg-white rounded-3xl h-10 px-4 black"
      />
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        name="content"
        id="content-area"
        rows={3}
        placeholder="Describe your post..."
        className="bg-white rounded-xl px-4 py-2 mt-3 black"
      ></textarea>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-3"
      />
      {selectedImage && (
        <p>Selected Image: {selectedImage.name}</p>
      )}
      <Button
        className="mt-3"
        disabled={!user}
        loading={loading}
        onClick={async () => {
          setLoading(true);
          // Upload the selected image to IPFS here and set the IPFS hash in the `imageIPFSHash` state.
          // You can use a library like ipfs-http-client to interact with IPFS.
          // Once the image is uploaded, you can include its IPFS hash in your post data when calling `onSubmit()`.
          await onSubmit(imageIPFSHash);
          setLoading(false);
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};
