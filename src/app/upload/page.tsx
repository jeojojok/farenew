'use client';

import { useState, useCallback } from 'react';

type FileType = 'image' | 'video' | 'audio' | null;

interface UploadedFile {
  id: string;
  name: string;
  type: FileType;
  size: number;
  uploadedAt: Date;
  preview?: string;
}

export default function Upload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const getFileType = (file: File): FileType => {
    if (file.type.startsWith('image/')) return 'image';
    if (file.type.startsWith('video/')) return 'video';
    return null;
  };

  const handleFileChange = useCallback((files: FileList | null) => {
    if (!files) return;

    Array.from(files).forEach((file) => {
      const fileType = getFileType(file);
      if (!fileType) return;

      const fileId = `${Date.now()}-${file.name}`;
      
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress((prev) => {
          const currentProgress = prev[fileId] || 0;
          if (currentProgress >= 100) {
            clearInterval(progressInterval);
            return prev;
          }
          return { ...prev, [fileId]: currentProgress + Math.random() * 30 };
        });
      }, 300);

      const reader = new FileReader();
      reader.onload = (e) => {
        const newFile: UploadedFile = {
          id: fileId,
          name: file.name,
          type: fileType,
          size: file.size,
          uploadedAt: new Date(),
          preview: e.target?.result as string,
        };
        setUploadedFiles((prev) => [newFile, ...prev]);
        setUploadProgress((prev) => ({ ...prev, [fileId]: 100 }));
      };
      reader.readAsDataURL(file);
    });
  }, []);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileChange(e.dataTransfer.files);
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== fileId));
    setUploadProgress((prev) => {
      const newProgress = { ...prev };
      delete newProgress[fileId];
      return newProgress;
    });
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white">
      <section className="px-4 py-12 sm:py-16 max-w-5xl mx-auto">
        <div className="mb-12 sm:mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Add Your Memories
          </h1>
          <p className="text-slate-600 text-lg">
            Upload photos or videos from the farewell party
          </p>
        </div>

        {/* Drop Zone */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`relative border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 mb-8 sm:mb-12 animate-fade-in-up ${
            dragActive
              ? 'border-blue-500 bg-blue-50/50 scale-105'
              : 'border-slate-300 bg-white/50 hover:border-slate-400'
          }`}
        >
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={(e) => handleFileChange(e.target.files)}
            className="hidden"
            accept="image/*,video/*"
          />
          <label
            htmlFor="fileInput"
            className="cursor-pointer flex flex-col items-center justify-center space-y-4"
          >
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <div>
              <p className="text-lg sm:text-xl font-semibold text-slate-900">
                Drag and drop your files here
              </p>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                or click to browse (Images, Videos, Audio)
              </p>
            </div>
          </label>
        </div>

        {/* File Categories */}
        {uploadedFiles.length > 0 && (
          <div className="animate-fade-in-up">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Uploaded Files ({uploadedFiles.length})
            </h2>

            {/* Images */}
            {uploadedFiles.filter((f) => f.type === 'image').length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <span>🖼️</span> Photos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedFiles
                    .filter((f) => f.type === 'image')
                    .map((file) => (
                      <div
                        key={file.id}
                        className="rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in"
                      >
                        {file.preview && (
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="w-full aspect-square object-cover"
                          />
                        )}
                        <div className="p-4">
                          <p className="text-sm font-medium text-slate-900 truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {formatFileSize(file.size)}
                          </p>
                          <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${uploadProgress[file.id] || 100}%` }}
                            ></div>
                          </div>
                          <button
                            onClick={() => removeFile(file.id)}
                            className="mt-3 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Videos */}
            {uploadedFiles.filter((f) => f.type === 'video').length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <span>🎬</span> Videos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uploadedFiles
                    .filter((f) => f.type === 'video')
                    .map((file) => (
                      <div
                        key={file.id}
                        className="rounded-lg overflow-hidden bg-white/50 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in"
                      >
                        <div className="w-full aspect-video bg-black flex items-center justify-center">
                          <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div className="p-4">
                          <p className="text-sm font-medium text-slate-900 truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">
                            {formatFileSize(file.size)}
                          </p>
                          <div className="mt-3 w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all"
                              style={{ width: `${uploadProgress[file.id] || 100}%` }}
                            ></div>
                          </div>
                          <button
                            onClick={() => removeFile(file.id)}
                            className="mt-3 w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* audio uploads removed per user request */}
          </div>
        )}

        {uploadedFiles.length === 0 && (
          <div className="text-center text-slate-500 mt-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <p className="text-lg">No files uploaded yet</p>
            <p className="text-sm mt-2">Upload your favorite memories to get started!</p>
          </div>
        )}
      </section>
    </main>
  );
}
