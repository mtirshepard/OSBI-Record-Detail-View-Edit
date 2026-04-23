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
  }
];

const state = {
  records: loadRecords(),
  searchFilters: {
    lastName: "test",
    firstName: "test",
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
  detailTitle: document.getElementById("detailTitle"),
  sidebarPersonName: document.getElementById("sidebarPersonName"),
  sidebarSid: document.getElementById("sidebarSid"),
  sidebarDobNav: document.getElementById("sidebarDobNav"),
  sidebarGenderNav: document.getElementById("sidebarGenderNav"),
  quickTcn: document.getElementById("quickTcn"),
  quickRecordType: document.getElementById("quickRecordType"),
  quickRank: document.getElementById("quickRank"),
  quickUpdated: document.getElementById("quickUpdated"),
  modeBadge: document.getElementById("modeBadge"),
  editToggleButton: document.getElementById("editToggleButton"),
  editToggleLabel: document.getElementById("editToggleLabel"),
  editToggleIcon: document.getElementById("editToggleIcon"),
  viewEditModeButton: document.getElementById("viewEditModeButton"),
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
    ? "Select a row to open the record in view mode, or use the pencil to jump into edit mode."
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
        <button class="results-action" type="button" data-action="view" data-id="${record.id}" title="View record">👁</button>
        <button class="results-action" type="button" data-action="edit" data-id="${record.id}" title="Modify record">✎</button>
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
      openDetail(record.id, "view");
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

  elements.detailTitle.textContent = `${fullName || "Person"} Record`;
  elements.sidebarPersonName.textContent = (fullName || "Unnamed Person").toUpperCase();
  elements.sidebarSid.textContent = `SID: ${sourceRecord.sid}`;
  elements.sidebarDobNav.textContent = `DOB: ${sourceRecord.dob}`;
  elements.sidebarGenderNav.textContent = `Gender: ${displayGender}`;
  elements.quickTcn.textContent = sourceRecord.tcn;
  elements.quickRecordType.textContent = sourceRecord.recordType;
  elements.quickRank.textContent = String(sourceRecord.rank);
  elements.quickUpdated.textContent = sourceRecord.updatedAt;

  const isEditing = state.mode === "edit";
  elements.modeBadge.textContent = isEditing ? "Edit Mode" : "View Mode";
  elements.modeBadge.className = isEditing
    ? "mode-badge mode-badge-edit"
    : "mode-badge mode-badge-view";
  elements.editToggleLabel.textContent = isEditing ? "View Record" : "Edit Record";
  elements.editToggleIcon.textContent = isEditing ? "👁" : "✎";
  elements.viewEditModeButton.textContent = isEditing ? "Switch To View" : "View And Edit";
  elements.cancelEditButton.classList.toggle("hidden", !isEditing);
  elements.saveButton.classList.toggle("hidden", !isEditing);

  for (const input of detailInputs) {
    const field = input.dataset.field;
    input.value = sourceRecord[field] ?? "";
    input.disabled = !isEditing;
  }
}

function updateDraftFromForm() {
  if (!state.draftRecord) return;

  for (const input of detailInputs) {
    const field = input.dataset.field;
    state.draftRecord[field] = input.value;
  }
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
    firstName: "test",
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

  const mode = actionButton.dataset.action === "edit" ? "edit" : "view";
  openDetail(actionButton.dataset.id, mode);
});

elements.backToSearchButton.addEventListener("click", returnToSearch);
elements.editToggleButton.addEventListener("click", toggleMode);
elements.viewEditModeButton.addEventListener("click", toggleMode);
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
