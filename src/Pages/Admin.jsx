import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icon = {
  Projects: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  Feedback: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>,
  Messages: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
  Delete: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>,
  Edit: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  Upload: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>,
  Eye: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>,
  Link: () => <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
};

// ─── Stat Card & Section Header ────────────────────────────────────────────────
const StatCard = ({ label, value, gradient, icon: IconComp }) => (
  <div className="relative bg-[#0d0d0d] border border-white/[0.07] rounded-2xl p-5 overflow-hidden group hover:border-white/20 transition-all duration-300">
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 text-xs uppercase tracking-widest font-medium mb-2">{label}</p>
        <p className="text-2xl md:text-4xl font-bold text-white">{value}</p>
      </div>
      <div className={`p-2.5 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10`}>
        <div className="text-white opacity-80"><IconComp /></div>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ title, subtitle, accent }) => (
  <div className="mb-8">
    <div className={`inline-block text-xs font-bold uppercase tracking-[0.25em] ${accent} mb-2`}>✦ {subtitle}</div>
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    <div className="h-[1px] w-full bg-white/[0.06] mt-4" />
  </div>
);

// ─── Main Admin Component ─────────────────────────────────────────────────────
const Admin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const [activeTab, setActiveTab] = useState('projects');

  const [allProjects, setAllProjects] = useState([]);
  const [messages, setMessages] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  
  const [editProjectId, setEditProjectId] = useState(null);
  const categories = ['Websites', 'Apps', 'Wordpress', 'Shopify', 'Videos', 'Graphic'];

  const [formData, setFormData] = useState({
    category: 'Websites', name: '', level: 'Level 1', desc: '', project_url: '' 
  });
  const [mainImage, setMainImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);

  // NEW: Simplified Feedback Form State
  const [feedbackForm, setFeedbackForm] = useState({ 
    clientName: '', // Just for admin reference
    postUrl: ''     // Link to the actual post
  });
  const [feedbackScreenshot, setFeedbackScreenshot] = useState(null);

  useEffect(() => {
    fetchProjects(); fetchMessages(); loadFeedbacks();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    setAllProjects(data || []);
  };
  const fetchMessages = async () => {
    const { data } = await supabase.from('messages').select('*').order('created_at', { ascending: false });
    setMessages(data || []);
  };
  const loadFeedbacks = async () => {
    const { data } = await supabase.from('feedbacks').select('*').order('created_at', { ascending: false });
    setFeedbacks(data || []);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginCreds.username === 'admin' && loginCreds.password === 'admin123') setIsAuthenticated(true);
    else alert('Invalid Credentials!');
  };

  const uploadFileToBucket = async (file, folder) => {
    const fileName = `${folder}-${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const { error: uploadError } = await supabase.storage.from('portfolio-images').upload(`${folder}/${fileName}`, file);
    if (uploadError) throw uploadError;
    const { data } = supabase.storage.from('portfolio-images').getPublicUrl(`${folder}/${fileName}`);
    return data.publicUrl;
  };

  // --- Project Handlers ---
  const handleAddOrUpdateProject = async (e) => {
    e.preventDefault();
    if (!editProjectId && !mainImage) return alert('Please upload a main thumbnail!');
    setIsUploading(true);
    try {
      let mainImageUrl = formData.img; 
      let galleryUrls = formData.workImages || [];
      if (mainImage) mainImageUrl = await uploadFileToBucket(mainImage, 'uploads');
      if (galleryImages.length > 0) {
        galleryUrls = await Promise.all(Array.from(galleryImages).map(f => uploadFileToBucket(f, 'uploads')));
      }

      const projectData = { category: formData.category, name: formData.name, desc: formData.desc, project_url: formData.project_url, img: mainImageUrl, workImages: galleryUrls };

      if (editProjectId) {
        await supabase.from('projects').update(projectData).eq('id', editProjectId);
        alert('Project Updated! 🚀');
      } else {
        await supabase.from('projects').insert([projectData]);
        alert('Project Added! 🚀');
      }
      fetchProjects(); resetProjectForm();
    } catch (error) { alert('Error saving project.'); } 
    finally { setIsUploading(false); }
  };

  const handleEditClick = (project) => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
    setEditProjectId(project.id);
    setFormData({ category: project.category, name: project.name, level: project.level || 'Level 1', desc: project.desc, project_url: project.project_url || '', img: project.img, workImages: project.workImages });
    setMainImage(null); setGalleryImages([]);
  };

  const resetProjectForm = () => {
    setEditProjectId(null); setFormData({ category: 'Websites', name: '', level: 'Level 1', desc: '', project_url: '' });
    setMainImage(null); setGalleryImages([]);
  };

  const deleteProject = async (id) => {
    if (window.confirm('Delete this project?')) {
      await supabase.from('projects').delete().eq('id', id);
      setAllProjects(allProjects.filter((p) => p.id !== id));
    }
  };

  // --- Feedback Handlers ---
  const handleAddFeedback = async (e) => {
    e.preventDefault();
    if (!feedbackScreenshot) return alert("Please upload a screenshot of the review!");
    
    setIsUploading(true);
    try {
      // 1. Upload screenshot
      const screenshotUrl = await uploadFileToBucket(feedbackScreenshot, 'feedbacks');
      
      // 2. Save to database (Using clientImg for screenshot, video_url for the post link)
      const { error } = await supabase.from('feedbacks').insert([{ 
        clientName: feedbackForm.clientName || 'Social Review', // Fallback name
        clientImg: screenshotUrl, // Saving SCREENSHOT here
        video_url: feedbackForm.postUrl, // Saving POST URL here
        message: 'Screenshot Review', // Dummy data to satisfy previous schema
        designation: '',
        rating: 5,
        is_approved: true 
      }]);
      
      if (error) throw error;
      alert('Review Screenshot added successfully! ⭐');
      loadFeedbacks(); 
      
      // Reset form
      setFeedbackForm({ clientName: '', postUrl: '' });
      setFeedbackScreenshot(null);
      document.getElementById("screenshotInput").value = "";
    } catch (error) { 
      alert('Error uploading screenshot.'); 
    } finally {
      setIsUploading(false);
    }
  };

  const approveFeedback = async (id) => {
    await supabase.from('feedbacks').update({ is_approved: true }).eq('id', id);
    loadFeedbacks();
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Delete this review?')) {
      await supabase.from('feedbacks').delete().eq('id', id);
      setFeedbacks(feedbacks.filter(f => f.id !== id));
    }
  };

  const deleteMessage = async (id) => {
    if (window.confirm('Delete this message?')) {
      await supabase.from('messages').delete().eq('id', id);
      setMessages(messages.filter((m) => m.id !== id));
    }
  };

  if (!isAuthenticated) {
    // ... Login form remains exactly the same ...
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[500px] h-auto md:h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
          <form onSubmit={handleLogin} className="relative bg-[#0a0a0a] border border-white/10 p-4 md:p-10 rounded-3xl w-full max-w-md shadow-2xl z-10">
            <div className="text-center mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">A</div>
              <h2 className="text-2xl font-bold text-white">Admin Access</h2>
            </div>
            <div className="space-y-4">
              <input type="text" placeholder="Username" className="w-full p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-cyan-500/60 transition-colors" onChange={(e) => setLoginCreds({ ...loginCreds, username: e.target.value })} required />
              <input type="password" placeholder="Password" className="w-full p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-cyan-500/60 transition-colors" onChange={(e) => setLoginCreds({ ...loginCreds, password: e.target.value })} required />
              <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 p-4 rounded-2xl font-bold text-white transition-all hover:opacity-90 mt-2">Login to Dashboard</button>
            </div>
          </form>
        </div>
      );
  }

  const tabs = [
    { id: 'projects', label: 'Projects', icon: Icon.Projects, badge: allProjects.length, color: 'text-cyan-400' },
    { id: 'feedback', label: 'Reviews (Images)', icon: Icon.Feedback, badge: feedbacks.length, color: 'text-amber-400' },
    { id: 'messages', label: 'Messages', icon: Icon.Messages, badge: messages.length, color: 'text-blue-400' },
  ];
  const showUrlField = ['Websites', 'Apps', 'Wordpress', 'Shopify'].includes(formData.category);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Top Navbar */}
      <div className="sticky top-0 z-40 bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-sm font-bold">A</div>
            <span className="font-bold text-white tracking-tight">Admin Dashboard</span>
          </div>
          <button onClick={() => navigate('/projects')} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm"><Icon.Eye /> View Portfolio</button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <StatCard label="Total Projects" value={allProjects.length} gradient="from-cyan-500 to-blue-600" icon={Icon.Projects} />
          <StatCard label="Uploaded Reviews" value={feedbacks.length} gradient="from-amber-500 to-orange-500" icon={Icon.Feedback} />
          <StatCard label="Inquiries" value={messages.length} gradient="from-blue-500 to-violet-600" icon={Icon.Messages} />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-1 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-1 mb-10 w-fit">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id ? 'bg-white/10 text-white shadow-sm' : 'text-gray-600 hover:text-gray-400'}`}>
              <tab.icon /> {tab.label}
              {tab.badge > 0 && <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-white/10 ${tab.color}`}>{tab.badge}</span>}
            </button>
          ))}
        </div>

        {/* ══════════════════ PROJECTS TAB (Same as Before) ══════════════════ */}
        {activeTab === 'projects' && (
            // ... Your exact projects tab code here ... (Omitted for brevity, paste your working projects code here)
            <div>
            <div className="flex items-center justify-between mb-8">
              <SectionHeader title={editProjectId ? "Edit Project" : "Add New Project"} subtitle="Portfolio Management" accent="text-cyan-400" />
              {editProjectId && (
                <button onClick={resetProjectForm} className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold text-white transition-all">Cancel Edit</button>
              )}
            </div>

            <form onSubmit={handleAddOrUpdateProject} className={`bg-[#0a0a0a] border ${editProjectId ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]' : 'border-white/[0.07]'} rounded-3xl p-8 mb-12 space-y-6 transition-all duration-500`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Category</label>
                  <select className="w-full p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-cyan-500/60" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    {categories.map((c) => <option key={c} value={c} className="bg-[#0a0a0a]">{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Project Name</label>
                  <input type="text" placeholder="e.g. E-Commerce Store" className="w-full p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-cyan-500/60" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                </div>
              </div>

              {showUrlField && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <label className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Icon.Link /> Live URL (Optional)
                  </label>
                  <input type="url" placeholder="https://www.example.com" className="w-full p-3.5 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-white outline-none focus:border-blue-500/60 transition-colors" value={formData.project_url} onChange={(e) => setFormData({ ...formData, project_url: e.target.value })} />
                </div>
              )}

              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Description</label>
                <textarea rows="3" placeholder="Brief description..." className="w-full p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-cyan-500/60 resize-none" value={formData.desc} onChange={(e) => setFormData({ ...formData, desc: e.target.value })} required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white/[0.02] border border-dashed border-white/10 rounded-2xl p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Main Thumbnail {editProjectId ? "(Leave blank to keep existing)" : "*"}</p>
                  <input type="file" accept="image/*" className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-cyan-500/10 file:text-cyan-400 cursor-pointer" onChange={(e) => setMainImage(e.target.files[0])} required={!editProjectId} />
                </div>
                <div className="bg-white/[0.02] border border-dashed border-white/10 rounded-2xl p-5">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Gallery Images (Optional)</p>
                  <input type="file" accept="image/*" multiple className="w-full text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-blue-500/10 file:text-blue-400 cursor-pointer" onChange={(e) => setGalleryImages(e.target.files)} />
                </div>
              </div>

              <button type="submit" disabled={isUploading} className={`w-full ${editProjectId ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-cyan-500 to-blue-600'} hover:opacity-90 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white`}>
                {isUploading ? 'Saving...' : editProjectId ? '✓ Save Changes' : <><Icon.Upload /> Publish Project</>}
              </button>
            </form>

            <SectionHeader title={`All Projects (${allProjects.length})`} subtitle="Manage Existing" accent="text-cyan-400" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {allProjects.length > 0 ? allProjects.map((project) => (
                <div key={project.id} className="group bg-[#0a0a0a] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
                  <div className="relative overflow-hidden h-44">
                    <img src={project.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-2.5 py-1 rounded-full backdrop-blur-sm">{project.category}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-white truncate">{project.name}</h3>
                    {project.project_url && <a href={project.project_url} target="_blank" rel="noreferrer" className="text-[10px] text-blue-400 hover:underline mt-1 block truncate">🔗 {project.project_url}</a>}
                    <div className="flex items-center gap-3 mt-4">
                      <button onClick={() => handleEditClick(project)} className="flex-1 flex items-center justify-center gap-2 text-xs font-bold text-cyan-500/60 hover:text-cyan-400 border border-cyan-500/10 hover:border-cyan-500/40 py-2.5 rounded-xl transition-all"><Icon.Edit /> Edit</button>
                      <button onClick={() => deleteProject(project.id)} className="flex-1 flex items-center justify-center gap-2 text-xs font-bold text-red-500/60 hover:text-red-500 border border-red-500/10 hover:border-red-500/40 py-2.5 rounded-xl transition-all"><Icon.Delete /> Delete</button>
                    </div>
                  </div>
                </div>
              )) : <p className="text-gray-700 italic col-span-full text-center py-6 md:py-10">No projects uploaded yet.</p>}
            </div>
          </div>
        )}

        {/* ══════════════════ NEW: FEEDBACK TAB (SCREENSHOTS) ══════════════════ */}
        {activeTab === 'feedback' && (
          <div>
            <SectionHeader title="Upload Review Screenshot" subtitle="Visual Testimonials" accent="text-amber-400" />
            
            <form onSubmit={handleAddFeedback} className="bg-[#0a0a0a] border border-white/[0.07] rounded-3xl p-8 mb-12 space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider mb-2 block">Client / Project Name</label>
                  <input type="text" placeholder="e.g. John's E-Commerce" className="w-full p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white outline-none focus:border-amber-500/60" value={feedbackForm.clientName} onChange={(e) => setFeedbackForm({ ...feedbackForm, clientName: e.target.value })} required />
                  <p className="text-[10px] text-gray-500 mt-2 ml-1">Used for tracking in the admin panel.</p>
                </div>
                
                <div>
                  <label className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Icon.Link /> Reference Link (Optional)
                  </label>
                  <input type="url" placeholder="e.g. Link to Upwork/Twitter post" className="w-full p-3.5 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-white outline-none focus:border-blue-500/60 transition-colors" value={feedbackForm.postUrl} onChange={(e) => setFeedbackForm({ ...feedbackForm, postUrl: e.target.value })} />
                </div>
              </div>
              
              <div className="bg-white/[0.02] border border-dashed border-amber-500/30 rounded-2xl p-8 text-center">
                <p className="text-sm text-amber-400 font-bold mb-3">Upload Screenshot of Review *</p>
                <input 
                  type="file" 
                  id="screenshotInput"
                  accept="image/*" 
                  className="w-full max-w-xs mx-auto text-sm text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-amber-500/10 file:text-amber-400 cursor-pointer block" 
                  onChange={(e) => setFeedbackScreenshot(e.target.files[0])} 
                  required
                />
              </div>
              
              <button type="submit" disabled={isUploading} className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 text-white">
                {isUploading ? 'Uploading Screenshot...' : '⭐ Add Visual Review'}
              </button>
            </form>

            <SectionHeader title={`Uploaded Reviews (${feedbacks.length})`} subtitle="Manage Visuals" accent="text-amber-400" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {feedbacks.length > 0 ? feedbacks.map((f) => (
                <div key={f.id} className="bg-[#0a0a0a] border border-white/[0.07] rounded-2xl p-4 relative group">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-white text-sm">{f.clientName}</h3>
                    {f.video_url && (
                      <a href={f.video_url} target="_blank" rel="noreferrer" className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded hover:bg-blue-500/20">
                        View Post
                      </a>
                    )}
                  </div>
                  
                  {/* Shows the uploaded screenshot */}
                  <div className="w-full h-40 bg-black rounded-xl overflow-hidden border border-white/10 relative">
                    <img src={f.clientImg} alt="Review Screenshot" className="w-full h-full object-contain" loading="lazy" />
                  </div>

                  <div className="mt-4 border-t border-white/5 pt-4">
                    <button onClick={() => deleteFeedback(f.id)} className="w-full flex items-center justify-center gap-2 text-xs font-bold bg-red-500/5 text-red-500/60 py-2.5 rounded-xl border border-red-500/10 hover:bg-red-500/10 hover:text-red-500">
                      <Icon.Delete /> Delete Review
                    </button>
                  </div>
                </div>
              )) : <p className="col-span-full text-center py-6 md:py-10 text-gray-600">No screenshots uploaded yet.</p>}
            </div>
          </div>
        )}

        {/* ══════════════════ MESSAGES TAB (Same as Before) ══════════════════ */}
        {activeTab === 'messages' && (
          // ... Your exact messages tab code here ...
          <div>
            <SectionHeader title={`All Messages (${messages.length})`} subtitle="Client Inquiries" accent="text-blue-400" />
            {messages.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-[#0a0a0a] border border-white/[0.07] rounded-2xl p-6 hover:border-blue-500/20 transition-all duration-300">
                    <h3 className="text-lg font-bold text-white mb-2">{msg.name}</h3>
                    <div className="flex flex-col gap-1 mb-5">
                      <a href={`mailto:${msg.email}`} className="text-xs text-gray-500 hover:text-blue-400">📧 {msg.email}</a>
                      <a href={`tel:${msg.phone}`} className="text-xs text-gray-500 hover:text-blue-400">📞 {msg.phone}</a>
                      {msg.company && <span className="text-xs text-blue-400/70">🏢 {msg.company}</span>}
                    </div>
                    <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mb-4"><p className="text-gray-400 text-sm whitespace-pre-wrap">"{msg.message}"</p></div>
                    <div className="flex gap-3 border-t border-white/[0.05] pt-4">
                      <a href={`mailto:${msg.email}`} className="flex-1 text-center text-xs font-bold py-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20">Reply</a>
                      <button onClick={() => deleteMessage(msg.id)} className="px-4 text-xs font-bold rounded-xl bg-red-500/[0.07] text-red-500/50 border border-red-500/10 hover:text-red-500 hover:bg-red-500/10"><Icon.Delete /></button>
                    </div>
                  </div>
                ))}
              </div>
            ) : <p className="text-center py-10 md:py-20 text-gray-600">📭 No messages received yet.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;