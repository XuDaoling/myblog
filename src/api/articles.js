import request from '@/utils/request'

export const upArticle = ({id,title,content,tagIds}) =>request.put( `/api/article/update/${id}`,{title,content,tagIds})

export const addArticle = ({title,content,tagIds}) => request.post('/api/article/save',{title,content,tagIds})

export const getArticleDetail = (id) =>request.get(`/api/article/${id}`)

export const getHomeArticleList = (pageNum) =>request.get(`/api/home/${pageNum}`)

export const getMyArticlesList = (pageNum) =>request.get(`api/article/deleteOrUpdatePage/${pageNum}`)

export const getTags = () => request.get('/api/tags/all')

export const addTags = (tagName) => request.post(`api//tags/save/${tagName}`)

export const getTagDetail = ({tagId,pageNum}) => request.post('/api/article/commonTags',{tagId,pageNum})

export const getCollectArticles = (pageNum) => request.get(`/api/user/myCollect/${pageNum}`)

export const getHistoryArticles = (pageNum) => request.get(`/api/user/myHistory/${pageNum}`)

export const searchArticle = ({keyword,pageNum}) => request.post('/api/home/keyWord',{keyword,pageNum})
