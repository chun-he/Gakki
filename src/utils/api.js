import request from './request'
import mobx from './mobx'

export const apps = data => {
  return request({
    url: '/api/v1/apps',
    method: 'post',
    data
  })
}

export const authorize = params => {
  return request({
    url: '/oauth/authorize',
    method: 'get',
    params
  })
}

export const getToken = data => {
  return request({
    url: `/oauth/token`,
    method: 'post',
    data
  })
}

export const getHomeTimelines = (url, params) => {
  return request({
    url: `/api/v1/timelines/${url}`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    },
    params
  })
}

export const getFavourites = params => {
  return request({
    url: `api/v1/favourites`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    },
    params
  })
}

export const getCurrentUser = () => {
  return request({
    url: '/api/v1/accounts/verify_credentials',
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取时间线上的toot
export const getStatuses = id => {
  return request({
    url: `/api/v1/statuses/${id}`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取用户发送的toot
export const getUserStatuses = (id, params) => {
  return request({
    url: `/api/v1/accounts/${id}/statuses`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    },
    params
  })
}

// 删除toot
export const deleteStatuses = id => {
  return request({
    url: `/api/v1/statuses/${id}`,
    method: 'delete',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取评论
export const context = id => {
  return request({
    url: `/api/v1/statuses/${id}/context`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

export const favourite = (id, favourite) => {
  return request({
    url: `/api/v1/statuses/${id}/${favourite ? 'favourite' : 'unfavourite'}`,
    method: 'post',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

export const reblog = (id, reblog) => {
  return request({
    url: `/api/v1/statuses/${id}/${reblog ? 'reblog' : 'unreblog'}`,
    method: 'post',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

/**
 * @description 隐藏/取消隐藏 某人
 * @param {notificationStatus}: 是否同时隐藏该用户的通知
 */
export const muteAccount = (id, mute, notificationStatus) => {
  return request({
    url: `/api/v1/accounts/${id}/${mute ? 'mute' : 'unmute'}`,
    method: 'post',
    data: {
      notifications: notificationStatus
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 屏蔽/取消屏蔽 某人
export const blockAccount = (id, block) => {
  return request({
    url: `/api/v1/accounts/${id}/${block ? 'block' : 'unblock'}`,
    method: 'post',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取隐藏用户列表
export const mutesList = () => {
  return request({
    url: '/api/v1/mutes',
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 发送toot
export const sendStatuses = data => {
  return request({
    url: '/api/v1/statuses',
    method: 'post',
    data,
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取和某人的关系数据
export const getRelationship = id => {
  let query = ''
  id.forEach(item => {
    query += `id[]=${item}&`
  })

  return request({
    url: `/api/v1/accounts/relationships?${query}`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取某人详情数据
export const getAccountData = id => {
  return request({
    url: `/api/v1/accounts/${id}`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 在个人资料页面置顶/取消置顶
export const setPin = (id, pinned) => {
  return request({
    url: `/api/v1/statuses/${id}/${pinned ? 'unpin' : 'pin'}`,
    method: 'post',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 上传媒体文件：图片/视频
export const upload = ({ response, description, focus }) => {
  const data = new FormData()

  data.append('file', {
    uri: response.uri,
    type: response.type,
    name: response.fileName
  })
  data.append('description', description)
  data.append('focus', focus)
  return request({
    url: '/api/v1/media',
    method: 'post',
    data: data,
    headers: {
      Authorization: mobx.access_token,
      'content-type': 'multipart/form-data'
    }
  })
}

// 更新媒体文件参数
export const updateMedia = (id, data) => {
  return request({
    url: `/api/v1/media/${id}`,
    method: 'put',
    data,
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取当前实例的emoji
export const getCustomEmojis = () => {
  return request({
    url: '/api/v1/custom_emojis',
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取通知消息
export const getNotifications = params => {
  return request({
    url: '/api/v1/notifications',
    method: 'get',
    params,
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 清空通知消息
export const clearNotifications = () => {
  return request({
    url: '/api/v1/notifications/clear',
    method: 'post',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取通知消息
export const setProfile = data => {
  return request({
    url: '/settings/profile',
    method: 'get',
    params,
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取私信数据
export const getConversations = params => {
  return request({
    url: '/api/v1/conversations',
    method: 'get',
    params,
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取屏蔽用户
export const getBlocks = () => {
  return request({
    url: '/api/v1/blocks',
    method: 'get',
    params: {
      limit: 100
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取隐藏用户
export const getMutes = () => {
  return request({
    url: '/api/v1/mutes',
    method: 'get',
    params: {
      limit: 100
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 正在关注
export const following = (id, limit) => {
  return request({
    url: `api/v1/accounts/${id}/following`,
    method: 'get',
    params: {
      limit: limit || 1
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 关注者
export const followers = (id, limit) => {
  return request({
    url: `api/v1/accounts/${id}/followers`,
    method: 'get',
    params: {
      limit: limit || 1
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 关注/取关
export const follow = (id, follow) => {
  return request({
    url: `/api/v1/accounts/${id}/${follow ? 'follow' : 'unfollow'}`,
    method: 'post',
    data: {
      reblogs: true // 是否在你的时间线展示该用户转嘟的数据
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 关注请求列表
export const followRequests = () => {
  return request({
    url: `/api/v1/follow_requests`,
    method: 'get',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 审核关注请求
export const checkRequest = (id, status) => {
  return request({
    url: `/api/v1/follow_requests/${id}/${status ? 'authorize' : 'reject'}`,
    method: 'post',
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 搜索
export const search = q => {
  return request({
    url: `/api/v2/search`,
    method: 'get',
    params: {
      q
    },
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 获取标签内容
export const getTag = (tag, params) => {
  return request({
    url: `/api/v1/timelines/tag/${tag}`,
    method: 'get',
    params,
    headers: {
      Authorization: mobx.access_token
    }
  })
}

// 验证token是否有效
export const verify_credentials = access_token => {
  return request({
    url: `/api/v1/apps/verify_credentials`,
    method: 'get',
    headers: {
      Authorization: access_token
    }
  })
}
