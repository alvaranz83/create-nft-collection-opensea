const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "PadelManiaks";
const description = "PadelManiaks is the first NFT Club dedicated to Padel, the fastest growing sport in the world. Get exclusive access to Padel Rewards, Perks and Padel Networking Services around the World by holding one or more of our unique Padelmaniak NFTs. Holder Utility is the #1 Goal of PadelManiaks.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [

  {
      growEditionSizeTo: 270, //With Hair and Jackets
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Jackets" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 500, //With Hair and Jackets + ChinPiercing(NoBeard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Jackets" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "ChinPiercing" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 830, // With Hair and Hoodies
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 1100, // With Hair and Hoodies + ChinPiercing(NoBeard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "ChinPiercing" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 1450, // With Cap and Jackets
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Jackets" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
      ],
    },
    {
      growEditionSizeTo: 1750, // With Cap and Jackets + ChinPiercing (No Beard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Jackets" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
        { name: "ChinPiercing" },
      ],
    },
    {
      growEditionSizeTo: 2000, // With Cap and Hoodies
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
      ],
    },
    {
      growEditionSizeTo: 2300, // With Cap and Hoodies + ChinPiercing (No Beard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Tshirts" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
        { name: "ChinPiercing" },
      ],
    },
    {
      growEditionSizeTo: 2600, // With Hair, Hoodies and No T-shirts
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 2900, // With Hair, Hoodies and No T-shirts + ChinPiercing(NoBeard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "ChinPiercing" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 3150, // With Cap, Hoodies and No-Tshirts
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
      ],
    },
    {
      growEditionSizeTo: 3450, // With Cap, Hoodies and No-Tshirts + ChinPiercing(NoBeard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "Hoodies" },
        { name: "FacialExpressions" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
        { name: "ChinPiercing" },
      ],
    },
    {
      growEditionSizeTo: 3800, //With Hair and No-Tshirt
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 4200, //With Hair and No-Tshirt + ChinPiercing (NoBeard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "ChinPiercing" },
        { name: "Hair" },
        { name: "Earrings" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
      ],
    },
    {
      growEditionSizeTo: 4650, // With Cap and No-Tshirt
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "Beards" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
      ],
    },
    {
      growEditionSizeTo: 5000, // With Cap and No-Tshirt + ChinPiercing (NoBeard)
      layersOrder: [
        { name: "Backgrounds" },
        { name: "Benches" },
        { name: "Shorts" },
        { name: "Body" },
        { name: "LeftWristbands" },
        { name: "RightWristbands" },
        { name: "LeftWristbandLogos" },
        { name: "Neckchains" },
        { name: "Rackets" },
        { name: "Hands" },
        { name: "FacialExpressions" },
        { name: "Moustaches" },
        { name: "NosePiercing" },
        { name: "Glasses" },
        { name: "Caps" },
        { name: "ChinPiercing" },
      ],
    },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 2000,
  height: 3000,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://Padelmaniaks.com", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info
// ** REQUIRED **
const AUTH = "ead2458a-6fdd-44ef-b3ea-1dedd5e1f2b7";
const LIMIT = 2; // Your API key rate limit
const CONTRACT_NAME = 'PADELMANIAKS';
const CONTRACT_SYMBOL = 'PMS';
const CONTRACT_TYPE = 'erc721';
const MINT_TO_ADDRESS = '0xd24B4Bd00D6909707816AFA28846DB7f73d3f5b8';
const CHAIN = 'polygon';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const ROYALTY_SHARE = 600; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0xd24B4Bd00D6909707816AFA28846DB7f73d3f5b8"; // Address that will receive the royalty
// ** OPTIONAL **
let CONTRACT_ADDRESS = "0xe244cE4d383151fE13C295A3E212606c8FE1a83d"; // If you want to manually include it
// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = false; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = "Unknown"; // Replace with what you want the generic titles to say.
const GENERIC_DESCRIPTION = "Unknown"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = [
  "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh",
]; // Replace with your generic image(s). If multiple, separate with a comma.
const REVEAL_PROMPT = false; // Set to false if you want to disable the prompt to confirm each reveal.
const INTERVAL = 900000; // Milliseconds. This is the interval for it to check for sales and reveal the NFT. 900000 = 15 minutes.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  MINT_TO_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  INTERVAL,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  CONTRACT_TYPE,
  REVEAL_PROMPT,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
};
