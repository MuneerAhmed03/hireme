import React, { useState, ChangeEvent, useRef } from 'react';
import { Image, Send } from "lucide-react";

const CreatePage: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [image, setImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-10 p-6 ">
            <div className="rounded-xl border bg-white shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-purple-950 to-blue-950 p-6 text-white">
                    <h2 className="text-3xl font-bold">Create a Post</h2>
                    <p className="text-purple-100 mt-2">Share your thoughts with the world</p>
                </div>
                <div className="p-6">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                type="text"
                                placeholder="Enter your title"
                                value={title}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">
                                Content
                            </label>
                            <textarea
                                placeholder="What's on your mind?"
                                className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 transition-all"
                                value={content}
                                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
                                rows={4}
                            />
                        </div>
                        <div>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                ref={fileInputRef}
                            />
                            <button
                                type="button"
                                onClick={handleButtonClick}
                                className="flex items-center px-4 py-2 rounded-md font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 border border-purple-500 text-purple-950 hover:bg-purple-50 focus:ring-purple-950"
                            >
                                <Image className="mr-2 h-4 w-4" />
                                Upload Image
                            </button>
                        </div>
                        {image && (
                            <div className="mt-4 rounded-lg overflow-hidden shadow-md">
                                <img src={image} alt="Uploaded" className="w-full h-auto" />
                            </div>
                        )}
                        <div className="flex items-center justify-end mt-6">
                            <button className="flex items-center px-6 py-3 rounded-md font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gradient-to-r from-purple-950 to-blue-900 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500">
                                <Send className="mr-2 h-4 w-4" />
                                Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreatePage;