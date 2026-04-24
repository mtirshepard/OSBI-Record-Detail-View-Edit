const STORAGE_KEY = "osbi-person-poc-records-v1";

const seedRecords = [
  {
    id: "person-123456",
    sid: "123456",
    fbi: "FBI-778899",
    tcn: "C-CVA013772197",
    recordType: "Z",
    arrestDate: "04/20/2026",
    auto: "Yes",
    rank: 1,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "testy",
    middleName: "test",
    alias: "Test User",
    dob: "01/01/2000",
    sex: "M",
    race: "W",
    ssn: "111-22-3333",
    height: "6'0\"",
    weight: "195",
    eyeColor: "Brown",
    hairColor: "Black",
    qcNotes: "Seeded proof-of-concept record. Row click should open in view mode; pencil should open directly in edit mode.",
    address: "123 Justice Ave",
    city: "Oklahoma City",
    state: "OK",
    postalCode: "73102",
    updatedAt: "04/23/2026 1:38 PM"
  },
  {
    id: "person-654321",
    sid: "654321",
    fbi: "FBI-445566",
    tcn: "C-CVA098761122",
    recordType: "A",
    arrestDate: "02/11/2026",
    auto: "No",
    rank: 2,
    iiiFlag: "Yes",
    status: "Needs Review",
    lastName: "test",
    firstName: "jana",
    middleName: "m",
    alias: "J. Test",
    dob: "06/14/1996",
    sex: "F",
    race: "W",
    ssn: "222-33-4444",
    height: "5'7\"",
    weight: "142",
    eyeColor: "Hazel",
    hairColor: "Brown",
    qcNotes: "Secondary seeded record for broader search coverage.",
    address: "800 Records Blvd",
    city: "Tulsa",
    state: "OK",
    postalCode: "74103",
    updatedAt: "04/22/2026 9:12 AM"
  },
  {
    id: "person-100001",
    sid: "100001",
    fbi: "FBI-100001",
    tcn: "C-TST10000101",
    recordType: "A",
    arrestDate: "01/15/2026",
    auto: "Yes",
    rank: 3,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "alex",
    middleName: "q",
    alias: "Alex Test",
    dob: "03/05/1991",
    sex: "M",
    race: "W",
    ssn: "333-44-5501",
    height: "5'11\"",
    weight: "188",
    eyeColor: "Blue",
    hairColor: "Brown",
    qcNotes: "Demo record for search grid volume testing.",
    address: "100 Main Demo St",
    city: "Norman",
    state: "OK",
    postalCode: "73069",
    updatedAt: "04/21/2026 10:21 AM"
  },
  {
    id: "person-100002",
    sid: "100002",
    fbi: "FBI-100002",
    tcn: "C-TST10000201",
    recordType: "B",
    arrestDate: "01/22/2026",
    auto: "No",
    rank: 4,
    iiiFlag: "Yes",
    status: "Needs Review",
    lastName: "test",
    firstName: "amber",
    middleName: "l",
    alias: "Amber Test",
    dob: "08/11/1994",
    sex: "F",
    race: "W",
    ssn: "333-44-5502",
    height: "5'6\"",
    weight: "136",
    eyeColor: "Green",
    hairColor: "Blonde",
    qcNotes: "Demo record for client review.",
    address: "102 Main Demo St",
    city: "Edmond",
    state: "OK",
    postalCode: "73013",
    updatedAt: "04/21/2026 10:24 AM"
  },
  {
    id: "person-100003",
    sid: "100003",
    fbi: "FBI-100003",
    tcn: "C-TST10000301",
    recordType: "Z",
    arrestDate: "01/29/2026",
    auto: "Yes",
    rank: 5,
    iiiFlag: "No",
    status: "Ready For Edit",
    lastName: "test",
    firstName: "brian",
    middleName: "k",
    alias: "B. Test",
    dob: "11/23/1989",
    sex: "M",
    race: "B",
    ssn: "333-44-5503",
    height: "6'2\"",
    weight: "210",
    eyeColor: "Brown",
    hairColor: "Black",
    qcNotes: "Demo record for edit-mode examples.",
    address: "103 Main Demo St",
    city: "Broken Arrow",
    state: "OK",
    postalCode: "74012",
    updatedAt: "04/21/2026 10:27 AM"
  },
  {
    id: "person-100004",
    sid: "100004",
    fbi: "FBI-100004",
    tcn: "C-TST10000401",
    recordType: "A",
    arrestDate: "02/02/2026",
    auto: "No",
    rank: 6,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "carla",
    middleName: "n",
    alias: "Carla Test",
    dob: "05/09/1987",
    sex: "F",
    race: "H",
    ssn: "333-44-5504",
    height: "5'8\"",
    weight: "149",
    eyeColor: "Brown",
    hairColor: "Black",
    qcNotes: "Demo record set four.",
    address: "104 Main Demo St",
    city: "Stillwater",
    state: "OK",
    postalCode: "74074",
    updatedAt: "04/21/2026 10:30 AM"
  },
  {
    id: "person-100005",
    sid: "100005",
    fbi: "FBI-100005",
    tcn: "C-TST10000501",
    recordType: "B",
    arrestDate: "02/08/2026",
    auto: "Yes",
    rank: 7,
    iiiFlag: "Yes",
    status: "Needs Review",
    lastName: "test",
    firstName: "derek",
    middleName: "p",
    alias: "Derek Test",
    dob: "07/14/1993",
    sex: "M",
    race: "A",
    ssn: "333-44-5505",
    height: "5'10\"",
    weight: "173",
    eyeColor: "Hazel",
    hairColor: "Black",
    qcNotes: "Demo record set five.",
    address: "105 Main Demo St",
    city: "Lawton",
    state: "OK",
    postalCode: "73505",
    updatedAt: "04/21/2026 10:33 AM"
  },
  {
    id: "person-100006",
    sid: "100006",
    fbi: "FBI-100006",
    tcn: "C-TST10000601",
    recordType: "Z",
    arrestDate: "02/15/2026",
    auto: "No",
    rank: 8,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "elena",
    middleName: "r",
    alias: "Elena Test",
    dob: "12/01/1995",
    sex: "F",
    race: "W",
    ssn: "333-44-5506",
    height: "5'5\"",
    weight: "128",
    eyeColor: "Blue",
    hairColor: "Brown",
    qcNotes: "Demo record set six.",
    address: "106 Main Demo St",
    city: "Enid",
    state: "OK",
    postalCode: "73701",
    updatedAt: "04/21/2026 10:36 AM"
  },
  {
    id: "person-100007",
    sid: "100007",
    fbi: "FBI-100007",
    tcn: "C-TST10000701",
    recordType: "A",
    arrestDate: "02/21/2026",
    auto: "Yes",
    rank: 9,
    iiiFlag: "Yes",
    status: "Ready For Edit",
    lastName: "test",
    firstName: "frank",
    middleName: "s",
    alias: "Frank Test",
    dob: "09/17/1985",
    sex: "M",
    race: "B",
    ssn: "333-44-5507",
    height: "6'1\"",
    weight: "201",
    eyeColor: "Brown",
    hairColor: "Gray",
    qcNotes: "Demo record set seven.",
    address: "107 Main Demo St",
    city: "Muskogee",
    state: "OK",
    postalCode: "74401",
    updatedAt: "04/21/2026 10:39 AM"
  },
  {
    id: "person-100008",
    sid: "100008",
    fbi: "FBI-100008",
    tcn: "C-TST10000801",
    recordType: "B",
    arrestDate: "02/28/2026",
    auto: "No",
    rank: 10,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "grace",
    middleName: "t",
    alias: "Grace Test",
    dob: "10/10/1992",
    sex: "F",
    race: "H",
    ssn: "333-44-5508",
    height: "5'7\"",
    weight: "140",
    eyeColor: "Green",
    hairColor: "Brown",
    qcNotes: "Demo record set eight.",
    address: "108 Main Demo St",
    city: "Shawnee",
    state: "OK",
    postalCode: "74801",
    updatedAt: "04/21/2026 10:42 AM"
  },
  {
    id: "person-100009",
    sid: "100009",
    fbi: "FBI-100009",
    tcn: "C-TST10000901",
    recordType: "Z",
    arrestDate: "03/03/2026",
    auto: "Yes",
    rank: 11,
    iiiFlag: "Yes",
    status: "Needs Review",
    lastName: "test",
    firstName: "henry",
    middleName: "u",
    alias: "Henry Test",
    dob: "02/19/1988",
    sex: "M",
    race: "W",
    ssn: "333-44-5509",
    height: "6'0\"",
    weight: "184",
    eyeColor: "Hazel",
    hairColor: "Black",
    qcNotes: "Demo record set nine.",
    address: "109 Main Demo St",
    city: "Moore",
    state: "OK",
    postalCode: "73160",
    updatedAt: "04/21/2026 10:45 AM"
  },
  {
    id: "person-100010",
    sid: "100010",
    fbi: "FBI-100010",
    tcn: "C-TST10001001",
    recordType: "A",
    arrestDate: "03/11/2026",
    auto: "No",
    rank: 12,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "isla",
    middleName: "v",
    alias: "Isla Test",
    dob: "04/25/1997",
    sex: "F",
    race: "A",
    ssn: "333-44-5510",
    height: "5'4\"",
    weight: "121",
    eyeColor: "Brown",
    hairColor: "Black",
    qcNotes: "Demo record set ten.",
    address: "110 Main Demo St",
    city: "Owasso",
    state: "OK",
    postalCode: "74055",
    updatedAt: "04/21/2026 10:48 AM"
  },
  {
    id: "person-100011",
    sid: "100011",
    fbi: "FBI-100011",
    tcn: "C-TST10001101",
    recordType: "B",
    arrestDate: "03/17/2026",
    auto: "Yes",
    rank: 13,
    iiiFlag: "Yes",
    status: "Ready For Edit",
    lastName: "test",
    firstName: "jack",
    middleName: "w",
    alias: "Jack Test",
    dob: "01/30/1990",
    sex: "M",
    race: "B",
    ssn: "333-44-5511",
    height: "5'9\"",
    weight: "176",
    eyeColor: "Brown",
    hairColor: "Brown",
    qcNotes: "Demo record set eleven.",
    address: "111 Main Demo St",
    city: "Yukon",
    state: "OK",
    postalCode: "73099",
    updatedAt: "04/21/2026 10:51 AM"
  },
  {
    id: "person-100012",
    sid: "100012",
    fbi: "FBI-100012",
    tcn: "C-TST10001201",
    recordType: "Z",
    arrestDate: "03/24/2026",
    auto: "No",
    rank: 14,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "karen",
    middleName: "x",
    alias: "Karen Test",
    dob: "06/06/1986",
    sex: "F",
    race: "W",
    ssn: "333-44-5512",
    height: "5'6\"",
    weight: "134",
    eyeColor: "Blue",
    hairColor: "Red",
    qcNotes: "Demo record set twelve.",
    address: "112 Main Demo St",
    city: "Bartlesville",
    state: "OK",
    postalCode: "74003",
    updatedAt: "04/21/2026 10:54 AM"
  },
  {
    id: "person-100013",
    sid: "100013",
    fbi: "FBI-100013",
    tcn: "C-TST10001301",
    recordType: "A",
    arrestDate: "03/30/2026",
    auto: "Yes",
    rank: 15,
    iiiFlag: "Yes",
    status: "Needs Review",
    lastName: "test",
    firstName: "liam",
    middleName: "y",
    alias: "Liam Test",
    dob: "07/27/1998",
    sex: "M",
    race: "H",
    ssn: "333-44-5513",
    height: "6'0\"",
    weight: "190",
    eyeColor: "Brown",
    hairColor: "Black",
    qcNotes: "Demo record set thirteen.",
    address: "113 Main Demo St",
    city: "Ardmore",
    state: "OK",
    postalCode: "73401",
    updatedAt: "04/21/2026 10:57 AM"
  },
  {
    id: "person-100014",
    sid: "100014",
    fbi: "FBI-100014",
    tcn: "C-TST10001401",
    recordType: "B",
    arrestDate: "04/06/2026",
    auto: "No",
    rank: 16,
    iiiFlag: "No",
    status: "View Ready",
    lastName: "test",
    firstName: "mia",
    middleName: "z",
    alias: "Mia Test",
    dob: "11/12/1999",
    sex: "F",
    race: "A",
    ssn: "333-44-5514",
    height: "5'5\"",
    weight: "125",
    eyeColor: "Hazel",
    hairColor: "Brown",
    qcNotes: "Demo record set fourteen.",
    address: "114 Main Demo St",
    city: "Claremore",
    state: "OK",
    postalCode: "74017",
    updatedAt: "04/21/2026 11:00 AM"
  },
  {
    id: "person-100015",
    sid: "100015",
    fbi: "FBI-100015",
    tcn: "C-TST10001501",
    recordType: "Z",
    arrestDate: "04/12/2026",
    auto: "Yes",
    rank: 17,
    iiiFlag: "Yes",
    status: "Ready For Edit",
    lastName: "test",
    firstName: "noah",
    middleName: "a",
    alias: "Noah Test",
    dob: "12/18/1991",
    sex: "M",
    race: "W",
    ssn: "333-44-5515",
    height: "5'11\"",
    weight: "182",
    eyeColor: "Green",
    hairColor: "Brown",
    qcNotes: "Demo record set fifteen.",
    address: "115 Main Demo St",
    city: "Sapulpa",
    state: "OK",
    postalCode: "74066",
    updatedAt: "04/21/2026 11:03 AM"
  }
];

const state = {
  records: loadRecords(),
  searchFilters: {
    lastName: "test",
    firstName: "",
    middleName: "",
    dob: "",
    ssn: "",
    sid: "",
    fbi: "",
    recordType: "",
    race: "",
    sex: "",
    auto: ""
  },
  searchResults: [],
  selectedId: null,
  mode: "view",
  draftRecord: null
};

const elements = {
  searchView: document.getElementById("searchView"),
  detailView: document.getElementById("detailView"),
  searchForm: document.getElementById("searchForm"),
  advancedToggle: document.getElementById("advancedToggle"),
  advancedPanel: document.getElementById("advancedPanel"),
  advancedChevron: document.getElementById("advancedChevron"),
  resetSearchButton: document.getElementById("resetSearchButton"),
  resultsTableBody: document.getElementById("resultsTableBody"),
  emptyResults: document.getElementById("emptyResults"),
  resultsCount: document.getElementById("resultsCount"),
  resultsSummary: document.getElementById("resultsSummary"),
  backToSearchButton: document.getElementById("backToSearchButton"),
  viewModeTabButton: document.getElementById("viewModeTabButton"),
  editModeTabButton: document.getElementById("editModeTabButton"),
  detailTitle: document.getElementById("detailTitle"),
  recordHybridBadge: document.getElementById("recordHybridBadge"),
  sidebarPersonName: document.getElementById("sidebarPersonName"),
  sidebarSid: document.getElementById("sidebarSid"),
  sidebarDobNav: document.getElementById("sidebarDobNav"),
  sidebarGenderNav: document.getElementById("sidebarGenderNav"),
  sidebarRaceNav: document.getElementById("sidebarRaceNav"),
  sidebarModeHint: document.getElementById("sidebarModeHint"),
  detailForm: document.getElementById("detailForm"),
  cancelEditButton: document.getElementById("cancelEditButton"),
  saveButton: document.getElementById("saveButton")
};

const detailInputs = Array.from(document.querySelectorAll("[data-field]"));
const searchInputIds = [
  "lastNameInput",
  "firstNameInput",
  "middleNameInput",
  "dobInput",
  "ssnInput",
  "sidInput",
  "fbiInput",
  "recordTypeInput",
  "raceInput",
  "sexInput",
  "autoInput"
];

function loadRecords() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return structuredClone(seedRecords);

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : structuredClone(seedRecords);
  } catch (error) {
    return structuredClone(seedRecords);
  }
}

function persistRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function recordMatches(record, filters) {
  return Object.entries(filters).every(([key, value]) => {
    if (!value) return true;
    return normalize(record[key]).includes(normalize(value));
  });
}

function runSearch() {
  state.searchResults = state.records.filter((record) => recordMatches(record, state.searchFilters));
  renderResults();
}

function renderResults() {
  elements.resultsTableBody.innerHTML = "";
  elements.resultsCount.textContent = String(state.searchResults.length);
  elements.resultsSummary.textContent = state.searchResults.length
    ? "Open, edit, or try the example legacy actions directly from the landing-page results."
    : "";

  if (!state.searchResults.length) {
    elements.emptyResults.classList.remove("hidden");
    return;
  }

  elements.emptyResults.classList.add("hidden");

  for (const record of state.searchResults) {
    const row = document.createElement("tr");
    row.className = "results-row";
    row.dataset.id = record.id;
    row.innerHTML = `
      <td>${escapeHtml(record.sid)}</td>
      <td class="results-action-cell">
        <div class="results-action-links">
          <button class="results-action-link" type="button" data-action="view" data-id="${record.id}" title="View record">View</button>
          <button class="results-action-link" type="button" data-action="edit" data-id="${record.id}" title="Modify record">Modify</button>
          <button class="results-action-link" type="button" data-action="delete-arrest" data-id="${record.id}" title="Dummy delete arrest action">Delete A</button>
          <button class="results-action-link" type="button" data-action="seal-arrest" data-id="${record.id}" title="Dummy seal arrest action">Seal A</button>
          <button class="results-action-link" type="button" data-action="delete-master" data-id="${record.id}" title="Dummy delete master action">Delete M</button>
          <button class="results-action-link" type="button" data-action="seal-master" data-id="${record.id}" title="Dummy seal master action">Seal M</button>
        </div>
      </td>
      <td>${escapeHtml(record.lastName)}</td>
      <td>${escapeHtml(record.firstName)}</td>
      <td>${escapeHtml(record.middleName)}</td>
      <td>${escapeHtml(record.race)}</td>
      <td>${escapeHtml(record.sex)}</td>
      <td>${escapeHtml(record.dob)}</td>
      <td>${escapeHtml(record.fbi)}</td>
      <td>${escapeHtml(record.tcn)}</td>
      <td>${escapeHtml(record.recordType)}</td>
      <td>${escapeHtml(record.arrestDate)}</td>
      <td>${escapeHtml(record.auto)}</td>
      <td>${escapeHtml(record.rank)}</td>
      <td>${escapeHtml(record.iiiFlag)}</td>
    `;

    row.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-action]");
      if (actionButton) return;
      openInViewMode(record.id);
    });

    elements.resultsTableBody.appendChild(row);
  }
}

function getSelectedRecord() {
  return state.records.find((record) => record.id === state.selectedId) || null;
}

function openDetail(recordId, mode) {
  state.selectedId = recordId;
  state.mode = mode;
  state.draftRecord = structuredClone(getSelectedRecord());
  renderDetail();
  elements.searchView.classList.add("hidden");
  elements.detailView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openInViewMode(recordId) {
  openDetail(recordId, "view");
}

function openInEditMode(recordId) {
  openDetail(recordId, "edit");
}

function returnToSearch() {
  elements.detailView.classList.add("hidden");
  elements.searchView.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetail() {
  const sourceRecord = state.mode === "edit" ? state.draftRecord : getSelectedRecord();
  if (!sourceRecord) {
    returnToSearch();
    return;
  }

  const fullName = `${sourceRecord.firstName} ${sourceRecord.middleName} ${sourceRecord.lastName}`
    .replace(/\s+/g, " ")
    .trim();
  const displayGender = sourceRecord.sex === "M" ? "MALE" : sourceRecord.sex === "F" ? "FEMALE" : sourceRecord.sex;
  const displayRace = expandRace(sourceRecord.race).toUpperCase();

  elements.detailTitle.textContent = `${fullName || "Person"} Record`;
  elements.sidebarPersonName.textContent = (fullName || "Unnamed Person").toUpperCase();
  elements.sidebarSid.textContent = `SID: ${sourceRecord.sid}`;
  elements.sidebarDobNav.textContent = `DOB: ${sourceRecord.dob}`;
  elements.sidebarGenderNav.textContent = `Gender: ${displayGender}`;
  elements.sidebarRaceNav.textContent = `Race: ${displayRace}`;
  elements.recordHybridBadge.textContent = recordTypeName(sourceRecord.recordType);

  const isEditing = state.mode === "edit";
  elements.cancelEditButton.classList.toggle("hidden", !isEditing);
  elements.saveButton.classList.toggle("hidden", !isEditing);
  elements.viewModeTabButton.className = isEditing ? "detail-mode-tab" : "detail-mode-tab detail-mode-tab-active";
  elements.editModeTabButton.className = isEditing ? "detail-mode-tab detail-mode-tab-active" : "detail-mode-tab";
  elements.sidebarModeHint.textContent = isEditing ? "Editing enabled for this record" : "Read-only review mode";

  for (const input of detailInputs) {
    const field = input.dataset.field;
    input.value = getDetailFieldValue(sourceRecord, field);
    input.disabled = !isEditing;
  }
}

function capitalize(value) {
  return String(value || "")
    .split(/\s+/)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase())
    .join(" ");
}

function expandRace(value) {
  const map = { W: "White", B: "Black", H: "Hispanic", A: "Asian" };
  return map[value] || value || "";
}

function recordTypeName(value) {
  const map = { Z: "Hybrid", A: "Standard", B: "Supplemental" };
  return map[value] || value || "Record";
}

function shiftDate(value, deltaDays) {
  const [month, day, year] = String(value).split("/").map(Number);
  if (!month || !day || !year) return value;
  const date = new Date(year, month - 1, day);
  date.setDate(date.getDate() + deltaDays);
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric"
  }).format(date);
}

function updateDraftFromForm() {
  if (!state.draftRecord) return;

  for (const input of detailInputs) {
    const field = input.dataset.field;
    setDetailFieldValue(state.draftRecord, field, input.value);
  }
}

function getDetailFieldValue(record, field) {
  const defaults = {
    prefix: "",
    suffix: "",
    dnaCollected: "No",
    photoAvailable: "No",
    palmPrints: "No",
    deceased: "No",
    deceasedDate: "",
    ncicNumber: "",
    registeredSexOffender: "No",
    sexOffenderRegDate: "",
    sexOffenderExpDate: "",
    sexOffenderRegNumber: "",
    tripleIFlag: record.iiiFlag === "Yes" ? "M - Multi-State" : "No",
    violentCrimeRegistered: "No",
    convictedFelon: "No",
    autoRecordLabel: record.auto,
    jacket: "Yes",
    fingerprintClass: "PIP0AAAAPMPOAAPMXXP0",
    afisFingerprintImage: "No",
    iffsFlag: "No",
    driverLicense: `OK-DL-${record.sid}`,
    docNumber: `DOC-${record.sid.slice(-4)}`,
    otnNumber: `OTN-${record.sid.slice(-5)}`,
    ocaNumber: `OCA-${record.sid.slice(-4)}`,
    mnuNumber: `MNU-${record.sid.slice(-3)}`,
    courtName: "Tulsa County",
    evaluatorName: "Kristie Banks",
    reviewQueue: "Hybrid Review Queue"
  };

  if (field === "recordTypeLabel") return `${record.recordType} - ${recordTypeName(record.recordType)}`;
  if (field === "genderLabel") return `${record.sex} - ${record.sex === "M" ? "MALE" : record.sex === "F" ? "FEMALE" : record.sex}`;
  if (field === "raceLabel") return `${record.race} - ${expandRace(record.race).toUpperCase()}`;
  return record[field] ?? defaults[field] ?? "";
}

function setDetailFieldValue(record, field, value) {
  if (field === "recordTypeLabel") {
    record.recordType = String(value).split("-")[0].trim() || value;
    return;
  }

  if (field === "genderLabel") {
    const normalized = String(value).toUpperCase();
    if (normalized.startsWith("M")) record.sex = "M";
    else if (normalized.startsWith("F")) record.sex = "F";
    else record.sex = value;
    return;
  }

  if (field === "raceLabel") {
    const normalized = String(value).toUpperCase();
    if (normalized.startsWith("W")) record.race = "W";
    else if (normalized.startsWith("B")) record.race = "B";
    else if (normalized.startsWith("H")) record.race = "H";
    else if (normalized.startsWith("A")) record.race = "A";
    else record.race = value;
    return;
  }

  if (field === "autoRecordLabel") {
    record.auto = value;
    return;
  }

  record[field] = value;
}

function saveDraft() {
  updateDraftFromForm();

  const index = state.records.findIndex((record) => record.id === state.selectedId);
  if (index === -1 || !state.draftRecord) return;

  state.draftRecord.updatedAt = formatTimestamp(new Date());
  state.records[index] = structuredClone(state.draftRecord);
  persistRecords();
  state.mode = "view";
  state.draftRecord = structuredClone(state.records[index]);
  runSearch();
  renderDetail();
}

function cancelEdit() {
  state.mode = "view";
  state.draftRecord = structuredClone(getSelectedRecord());
  renderDetail();
}

function toggleMode() {
  if (!state.selectedId) return;

  if (state.mode === "view") {
    state.mode = "edit";
    state.draftRecord = structuredClone(getSelectedRecord());
  } else {
    state.mode = "view";
    state.draftRecord = structuredClone(getSelectedRecord());
  }

  renderDetail();
}

function collectSearchFilters() {
  state.searchFilters = {
    lastName: document.getElementById("lastNameInput").value,
    firstName: document.getElementById("firstNameInput").value,
    middleName: document.getElementById("middleNameInput").value,
    dob: document.getElementById("dobInput").value,
    ssn: document.getElementById("ssnInput").value,
    sid: document.getElementById("sidInput").value,
    fbi: document.getElementById("fbiInput").value,
    recordType: document.getElementById("recordTypeInput").value,
    race: document.getElementById("raceInput").value,
    sex: document.getElementById("sexInput").value,
    auto: document.getElementById("autoInput").value
  };
}

function resetSearch() {
  state.searchFilters = {
    lastName: "test",
    firstName: "",
    middleName: "",
    dob: "",
    ssn: "",
    sid: "",
    fbi: "",
    recordType: "",
    race: "",
    sex: "",
    auto: ""
  };
  applySearchFiltersToForm();
  runSearch();
}

function applySearchFiltersToForm() {
  const fieldMap = {
    lastNameInput: state.searchFilters.lastName,
    firstNameInput: state.searchFilters.firstName,
    middleNameInput: state.searchFilters.middleName,
    dobInput: state.searchFilters.dob,
    ssnInput: state.searchFilters.ssn,
    sidInput: state.searchFilters.sid,
    fbiInput: state.searchFilters.fbi,
    recordTypeInput: state.searchFilters.recordType,
    raceInput: state.searchFilters.race,
    sexInput: state.searchFilters.sex,
    autoInput: state.searchFilters.auto
  };

  for (const id of searchInputIds) {
    document.getElementById(id).value = fieldMap[id] ?? "";
  }
}

function formatTimestamp(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(date);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

elements.searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  collectSearchFilters();
  runSearch();
});

elements.resetSearchButton.addEventListener("click", resetSearch);

elements.advancedToggle.addEventListener("click", () => {
  elements.advancedPanel.classList.toggle("hidden");
  elements.advancedChevron.style.transform = elements.advancedPanel.classList.contains("hidden")
    ? "rotate(0deg)"
    : "rotate(180deg)";
});

elements.resultsTableBody.addEventListener("click", (event) => {
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;

  const { action, id } = actionButton.dataset;
  if (action === "view") {
    openInViewMode(id);
    return;
  }

  if (action === "edit") {
    openInEditMode(id);
    return;
  }

  const actionLabels = {
    "delete-arrest": "Delete Arrest (dummy action)",
    "seal-arrest": "Seal Arrest (dummy action)",
    "delete-master": "Delete Master (dummy action)",
    "seal-master": "Seal Master (dummy action)"
  };

  const record = state.records.find((entry) => entry.id === id);
  const label = actionLabels[action] || "Dummy action";
  if (record) {
    window.alert(`${label}\n\nExample only for ${capitalize(record.firstName)} ${capitalize(record.lastName)}.\nNo real data is changed in this proof of concept.`);
  }
});

elements.backToSearchButton.addEventListener("click", returnToSearch);
elements.viewModeTabButton.addEventListener("click", () => {
  if (state.mode !== "view") {
    state.mode = "view";
    state.draftRecord = structuredClone(getSelectedRecord());
  }
  renderDetail();
});
elements.editModeTabButton.addEventListener("click", () => {
  if (state.mode !== "edit") {
    state.mode = "edit";
    state.draftRecord = structuredClone(getSelectedRecord());
  }
  renderDetail();
});
elements.cancelEditButton.addEventListener("click", cancelEdit);

elements.detailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  saveDraft();
});

detailInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (state.mode !== "edit") return;
    updateDraftFromForm();
  });
});

applySearchFiltersToForm();
runSearch();
