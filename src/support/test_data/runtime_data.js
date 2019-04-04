import utility from '../utils/common_utilities'

module.exports = {
    baseUrl: "https://qa.goja.io/fba/",


    calculator: {
        defaultUrlParams: {
            marketPlace: 'US',
            sizeUnit: 'IN',
            weightUnit: 'LB',
            dangerousGoods: 'false',
        },

        reqBody: () => {
            return {
                "name": "",
                "longestSide": utility.getRndInt({ max: 300}),
                "medianSide": utility.getRndInt({ max: 100}),
                "shortestSide": utility.getRndInt({ max: 900}),
                "weight": utility.getRndInt({ max: 300})
            }
        }
    },

    productHistory:{
            reqBody: () => {
                return {
                    "lengthUnit": "in",
                    "weightUnit": "lb",
                    "longestSide": utility.getRndInt({ max: 300}),
                    "medianSide": utility.getRndInt({ max: 300}),
                    "shortestSide": utility.getRndInt({ max: 300}),
                    "weight": utility.getRndInt({ max: 300}),
                    "sizeTierName": "Large Standard",
                    "dimensionalWeight": utility.getRndInt({ max: 300}),
                    "outboundShippingWeight": utility.getRndInt({ max: 300}),
                    "fullfilmentFee": utility.getRndInt({ max: 300}),
                    "dangerousGoods": false,
                    "title": utility.getRndStr(20)
                }
            }
    },

    amazonProductHistory:{
        reqBody: () => {
            return {
                "asin": null,
                "sku": null,
                "title": utility.getRndStr(20),
                "imageUrl": "http://ecx.images-amazon.com/images/I/41HoZZD7keL._SL75_.jpg",
                "lengthUnit": "in",
                "weightUnit": "lb",
                "longestSide": utility.getRndInt({ max: 300}),
                "medianSide": utility.getRndInt({ max: 300}),
                "shortestSide": utility.getRndInt({ max: 300}),
                "weight": utility.getRndInt({ max: 300}),
                "sizeTierName": "Large Standard",
                "dimensionalWeight": utility.getRndInt({ max: 20}),
                "outboundShippingWeight": utility.getRndInt({ max: 30}),
                "originalPrice": utility.getRndInt({ max: 38}),
                "fulfillmentFee": utility.getRndInt({ max: 15}),
                "dangerousGoods": null
            }
        }
    },

    myASIN:{
        filterParams: { startDate: utility.getCurrDate(), endDate: utility.getCurrDate() },

        reqBody: () => {
            return {
                "name": null,
                "weight": utility.getRndNumWithUnit({ min:0.1, max: 250}, ['lb', 'oz']),
                "longestSide": utility.getRndNumWithUnit({ min:0.1, max: 250}, ['in', 'cm']),
                "medianSide": utility.getRndNumWithUnit({ min:0.1, max: 250}, ['in', 'cm']),
                "shortestSide": utility.getRndNumWithUnit({ min:0.1, max: 250}, ['in', 'cm']),
                "isDangerous": null
            }
        }
    }

};
