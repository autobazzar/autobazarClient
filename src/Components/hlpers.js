export function propeUserData(res){
    return res.data.map(item=>({
        id:item.user_id,
        name:item.userName,
        email:item.email,
      }))
}

export function properAds(res){
    console.error(res);
    // ["creator", "code", "least-review"]
    return res.data.map(item=>({
        id:item.adId,
        code:`#${item.adId}`,
        'least-review':item.averageRate,
        creator:item.mobileNum,
      }))
}