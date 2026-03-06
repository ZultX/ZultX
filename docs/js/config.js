const API_BASE = "https://zultx.onrender.com";
const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

const overlay = document.getElementById('z-overlay');
const chatArea = document.getElementById("chatArea");
const input = document.getElementById("input");
const sendBtn = document.getElementById("sendBtn");
const startBtn = document.getElementById("startBtn");
const centerScreen = document.getElementById("centerScreen");
const historyList = document.getElementById("historyList");
const newChatBtn = document.getElementById("newChatBtn");
const suggestGrid = document.getElementById("suggestGrid");

const sidePanel = document.getElementById("sidePanel");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const tempChatBtn = document.getElementById("tempChatBtn");
const tempModal = document.getElementById("tempModal");
const tempList = document.getElementById("tempList");
const closeTempBtn = document.getElementById("closeTempBtn");
const smallLogo = document.getElementById("smallLogo");

const sideTheme = document.getElementById("sideTheme");
const sideLetters = document.getElementById("sideLetters");
const sideTip = document.getElementById("sideTip");
const sideShare = document.getElementById("sideShare");

const lettersModal = document.getElementById("lettersModal");
const modalLettersContent = document.getElementById("modalLettersContent");
const closeLettersBtn = document.getElementById("closeLettersBtn");

const tipModal = document.getElementById("tipModal");
const closeTipBtn = document.getElementById("closeTipBtn");
const copyUpiBtn = document.getElementById("copyUpiBtn");

const premiumAuth = document.getElementById("premiumAuth");
const premiumClose = document.getElementById("premiumClose");
const p_username = document.getElementById("p_username");
const p_email = document.getElementById("p_email");
const p_password = document.getElementById("p_password");
const p_submit = document.getElementById("p_submit");
const p_toggle = document.getElementById("p_toggle");
const p_guest = document.getElementById("p_guest");
const p_eye = document.getElementById("p_eye");
const p_msg = document.getElementById("p_msg");
const plusBtn = document.getElementById("plusBtn");
const attachBtn = document.getElementById("attachBtn");
const fileInput = document.getElementById("fileInput");


let currentConversationId = null;
let tempMode = false;
let uploadedFileName = null;
let uploadedFiles = [];
let premiumMode = "login";
