module.exports = {
    calculator: "/calculator",
    getCalParams: (args)=>{
       return `marketplace=${args.marketPlace}&sizeUnit=${args.sizeUnit}&weightUnit=${args.weightUnit}&dangerousGoods=${args.dangerousGoods}`
    },
    aws: "/aws",
    myAsin: "/myasin",
    productHistory: "/producthistory"

};
