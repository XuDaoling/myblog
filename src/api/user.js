import request from '@/utils/request'

export const userRegist = ({nickname, password, phoneNumber, code}) => request.post('/api/user/signIn', {nickname, password, phoneNumber, code})

export const userLogin = ({nickname, password}) => request.post('/api/user/login', ({nickname, password}))

export const getUserStar = () => request.get(`/api/user/myLeaders`)

export const getUserFans = () => request.get(`/api/user/myFans`)

export const getUserBase = () => request.get('/api/user/userSpace')

export const putComment = ({comment,articleId}) => request.post('/api/user/comment',{comment,articleId})

export const getCode = (phoneNumber) => request.get(`/api//user/code/${phoneNumber}`)

export const starUser = (targetUserId) => request.put(`/api/user/follow/${targetUserId}`)

export const unstarUser = (targetUserName) => request.put(`/api/user/unfollow/${targetUserName}`)

export const collectArticle = (articleId) => request.put(`/api/user/collect/${articleId}`)

export const uncollectArticle = (articleId) => request.delete(`/api/user/removeCollect/${articleId}`)