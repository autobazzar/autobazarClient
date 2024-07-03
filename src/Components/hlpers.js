export function propeUserData(res){
    return res.data.map(item=>({
        id:item.user_id,
        name:item.userName,
        email:item.email,
        status:`${item.isBanned ?'بن شده':'مجاز'}`
      }))
}

export function properAds(res){
    return res.data.map(item=>({
        id:item.adId,
        code:`#${item.adId}`,
        'least-review':item.averageRate,
        creator:item.mobileNum,
      }))
}

export function properComments(res){
    return res.data.map((item) => ({
      name: item.user.userName,
      comment: item.comment,
      id: item.rateId,
      "ad-id": `#${item.rateId}`,
    }));
}