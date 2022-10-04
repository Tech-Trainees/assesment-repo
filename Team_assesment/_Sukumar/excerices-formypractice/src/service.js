const users=['James','Michael','Harry','Sam','Dubby','John','Lufyy']

export const getRandomUser=()=>{
    return new Promise(resolve=>setTimeout(()=>{
        resolve(users[Math.floor(Math.random()*10)%users.length])
    },1000))
}