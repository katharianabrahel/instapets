import "./style.css";
import React, { useState, ChangeEvent } from "react";


interface PostProps {
    postPageType: "post" | undefined;
}

interface PostedImage {
    url: string;
    caption: string;
}

const PostPage: React.FC<PostProps> = ({ postPageType }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [postedImages, setPostedImages] = useState<PostedImage[]>([]);
    const [caption, setCaption] = useState<string>("");

    const openModal = () => setShowModal(true);

    const closeModal = () => setShowModal(false);

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setSelectedImage(selectedFile);
        }
    };

    const handleCaptionChange = (e: ChangeEvent<HTMLInputElement>) => setCaption(e.target.value);

    const handlePost = () => {
        if (selectedImage) {
        setPostedImages([
            { url: URL.createObjectURL(selectedImage), caption: caption }, 
            ...postedImages, 
        ]);
        setSelectedImage(null);
        setCaption("");
        setShowModal(false);
        }
    };

    return (
        <div className="newpost-container">
            {postPageType === "post" && (
            <button className="new-post-button" onClick={openModal}>
                Criar novo post
                <p>+</p>
            </button>
            )}
            {showModal && (
            <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <p>Novo post</p>
                <input className="subtitle" type="text" placeholder="Legenda" value={caption} onChange={handleCaptionChange} />
                <label className="upload-image-button">
                Upload image
                <input type="file" accept="image/*" onChange={handleImageChange}/>
                </label>
                <div className="post-image-container">
                {selectedImage && (
                <img className="selected-image" src={URL.createObjectURL(selectedImage)} alt="Imagem"
                />
                )}
                </div>
                <button className="button-post" onClick={handlePost}>Publicar</button>
                </div>
            </div>
            )}
            <div className="feed">
            {postedImages.map((image, index) => (
                <div className="image-post-container" key={index}>
                <img src={image.url} alt={`Imagem ${index + 1}`} />
                <div className="caption">
                    <p className="image-caption">@user.name {image.caption}</p>
                    <p className="time-post">1min</p>
                </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default PostPage;