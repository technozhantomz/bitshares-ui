import {getFaucet, getTestFaucet} from "../branding";

export const ioxbankAPIs = {};
export const pirateCashAPIs = {};

export const blockTradesAPIs = {};

export const openledgerAPIs = {};

export const rudexAPIs = {
    BASE: "https://gateway.rudex.org/api/rudex",
    COINS_LIST: "/coins",
    NEW_DEPOSIT_ADDRESS: "/simple-api/initiate-trade"
};

export const bitsparkAPIs = {};

export const cryptoBridgeAPIs = {};

export const citadelAPIs = {};

export const gdex2APIs = {};

// Legacy Deposit/Withdraw
export const gdexAPIs = {};

export const xbtsxAPIs = {
    BASE: "http://localhost:3090/api/v2",
    COINS_LIST: "/coin"
};

export const nodeRegions = [
    // region of the node follows roughly https://en.wikipedia.org/wiki/Subregion#/media/File:United_Nations_geographical_subregions.png
    "Northern Europe",
    "Western Europe",
    "Southern Europe",
    "Eastern Europe",
    "Northern Asia",
    "Western Asia",
    "Southern Asia",
    "Eastern Asia",
    "Central Asia",
    "Southeastern Asia",
    "Australia and New Zealand",
    "Melanesia",
    "Polynesia",
    "Micronesia",
    "Northern Africa",
    "Western Africa",
    "Middle Africa",
    "Eastern Africa",
    "Southern Africa",
    "Northern America",
    "Central America",
    "Caribbean",
    "South America"
];

export const settingsAPIs = {
    // If you want a location to be translated, add the translation to settings in locale-xx.js
    // and use an object {translate: key} in WS_NODE_LIST
    DEFAULT_WS_NODE: "wss://fake.automatic-selection.com",
    WS_NODE_LIST: [
        {
            url: "wss://fake.automatic-selection.com",
            location: {translate: "settings.api_closest"}
        },{
            url: "ws://127.0.0.1:8090/ws",
            location: "Cloud hosted"
        },
        {
            url: "wss://wsss.homepesa.org/ws",
            location: "Cloud hosted"
        }
    ],
    ES_WRAPPER_LIST: [
        {
            url: "https://api.Cloud.ws/openexplorer",
            region: "Western Europe",
            country: "Cloud",
            operator: "Cloud.info",
            contact: "telegram:blocksights"
        }
    ],
    DEFAULT_FAUCET: getFaucet().url,
    TESTNET_FAUCET: getTestFaucet().url
};
