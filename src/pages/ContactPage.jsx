import React, { useRef, useState } from 'react';
import { Upload, X, CheckCircle, Loader2 } from 'lucide-react';
import { useAppPreferences } from '../contexts/AppPreferencesContext';
import { getLocalizedCopy } from '../i18n/localize';

const WORKER_URL = 'https://reso-contact.gaoyukun1205.workers.dev';

const contactCopy = {
  en: {
    submitSuccessTitle: 'Thanks for reaching out!',
    submitSuccessBody: "We've received your feedback and will get back to you as soon as possible.",
    submitAnother: 'Submit another',
    sectionTag: 'Contact Us',
    title: 'Reso Support',
    intro:
      "Thanks for reaching out! We're here to help with any bugs, feedback, or questions about Reso. We'll get back to you as soon as possible.",
    nameLabel: "What's your name?",
    namePlaceholder: 'Your name',
    emailLabel: 'Your Email',
    messageLabel: 'How can we help?',
    messageHint: 'Please describe the issue, or share your feedback.',
    messagePlaceholder: "Tell us what's on your mind...",
    uploadLabel: 'File Upload',
    uploadHint: 'Screenshots or Screen Recording (Optional)',
    uploadAction: 'Click to choose a file or drag here',
    uploadLimit: 'Size limit: 10 MB',
    fileTooLarge: 'File size must be less than 10MB',
    submitFailed: 'Failed to submit. Please try again.',
    submitting: 'Submitting...',
    submit: 'Submit',
  },
  zh: {
    submitSuccessTitle: '感谢你的反馈！',
    submitSuccessBody: '我们已收到你的信息，会尽快回复。',
    submitAnother: '继续提交',
    sectionTag: '联系我们',
    title: 'Reso 支持',
    intro: '感谢你联系我们！无论是 bug、建议还是产品问题，我们都会尽快跟进。',
    nameLabel: '你的名字是？',
    namePlaceholder: '你的名字',
    emailLabel: '你的邮箱',
    messageLabel: '我们可以如何帮助你？',
    messageHint: '请描述你遇到的问题，或分享反馈。',
    messagePlaceholder: '告诉我们你的想法...',
    uploadLabel: '上传文件',
    uploadHint: '截图或屏幕录制（可选）',
    uploadAction: '点击选择文件或拖拽到这里',
    uploadLimit: '大小上限：10 MB',
    fileTooLarge: '文件大小不能超过 10MB',
    submitFailed: '提交失败，请稍后重试。',
    submitting: '提交中...',
    submit: '提交',
  },
  ja: {
    submitSuccessTitle: 'お問い合わせありがとうございます！',
    submitSuccessBody: 'フィードバックを受け取りました。できるだけ早くご返信します。',
    submitAnother: 'もう一度送信',
    sectionTag: 'Contact',
    title: 'Reso サポート',
    intro: 'バグ報告、要望、質問など何でもお送りください。できるだけ早く対応します。',
    nameLabel: 'お名前',
    namePlaceholder: 'お名前',
    emailLabel: 'メールアドレス',
    messageLabel: 'ご用件',
    messageHint: '発生した問題やフィードバックを具体的に記載してください。',
    messagePlaceholder: '内容をご記入ください...',
    uploadLabel: 'ファイル添付',
    uploadHint: 'スクリーンショットまたは画面収録（任意）',
    uploadAction: 'クリックして選択、またはここへドラッグ',
    uploadLimit: '上限サイズ: 10 MB',
    fileTooLarge: 'ファイルサイズは 10MB 未満にしてください',
    submitFailed: '送信に失敗しました。しばらくして再度お試しください。',
    submitting: '送信中...',
    submit: '送信',
  },
};

const ContactPage = () => {
  const { language } = useAppPreferences();
  const copy = getLocalizedCopy(contactCopy, language);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (selectedFile) => {
    if (selectedFile.size > 10 * 1024 * 1024) {
      setErrorMessage(copy.fileTooLarge);
      return;
    }
    setFile(selectedFile);
    setErrorMessage('');
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      const formPayload = new FormData();
      formPayload.append('name', formData.name);
      formPayload.append('email', formData.email);
      formPayload.append('message', formData.message);
      if (file) {
        formPayload.append('file', file);
      }

      const response = await fetch(WORKER_URL, {
        method: 'POST',
        body: formPayload,
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFile(null);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(copy.submitFailed);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <main className="pt-28 min-h-screen pb-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h1 className="text-3xl font-medium text-gray-900 dark:text-gray-100 mb-4">
              {copy.submitSuccessTitle}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {copy.submitSuccessBody}
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="px-6 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
            >
              {copy.submitAnother}
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-28 min-h-screen pb-20">
      <div className="max-w-2xl mx-auto px-6">
        <section className="mb-10">
          <p className="text-xs uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400 mb-5">
            {copy.sectionTag}
          </p>
          <h1 className="text-4xl md:text-5xl leading-tight tracking-tight font-medium text-gray-900 dark:text-gray-100 mb-5">
            {copy.title}
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {copy.intro}
          </p>
        </section>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
              {copy.nameLabel} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all"
              placeholder={copy.namePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
              {copy.emailLabel} <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
              {copy.messageLabel} <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {copy.messageHint}
            </p>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45 backdrop-blur-md text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20 transition-all resize-y min-h-[120px]"
              placeholder={copy.messagePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
              {copy.uploadLabel}
            </label>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {copy.uploadHint}
            </p>

            {file ? (
              <div className="flex items-center gap-3 p-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/72 dark:bg-black/45">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  type="button"
                  onClick={removeFile}
                  className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                >
                  <X size={18} className="text-gray-500 dark:text-gray-400" />
                </button>
              </div>
            ) : (
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed cursor-pointer transition-all ${
                  dragActive
                    ? 'border-black/30 dark:border-white/30 bg-black/5 dark:bg-white/5'
                    : 'border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20'
                }`}
              >
                <Upload size={24} className="text-gray-400 dark:text-gray-500 mb-3" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{copy.uploadAction}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{copy.uploadLimit}</p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              accept="image/*,video/*,.pdf"
              className="hidden"
            />
          </div>

          {errorMessage && (
            <p className="text-sm text-red-500 dark:text-red-400">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>{copy.submitting}</span>
              </>
            ) : (
              <span>{copy.submit}</span>
            )}
          </button>
        </form>
      </div>
    </main>
  );
};

export default ContactPage;
