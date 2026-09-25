const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const languageSwitch = document.querySelector('.language-switch');
const navGroups = [...document.querySelectorAll('.nav-group')];
const romanian = new Map([...document.querySelectorAll('[data-i18n]')].map((element) => [element.dataset.i18n, element.innerHTML]));

const english = {
  skip: 'Skip to content', menu: 'Open menu', navBefore: 'Before the race', navKit: 'Race kit pickup', navGear: 'Gear', navSchedule: 'Race schedule', navRoutes: 'Race routes', navImportant: 'Good to know', navDuring: 'During the race', navPace: 'Race pace', navPacers: 'Pacer teams', navHydration: 'Hydration points', navAfter: 'After the race', navResults: 'Results and finish', navEnd: 'Closing notes', navThanks: 'Final advice', navCta: 'View schedule <span aria-hidden="true">↗</span>',
  edition: 'Runner guide · 2026', heroIntro: 'Everything you need to know before, during and after your race.', startReading: 'Start the guide <span aria-hidden="true">↓</span>', beforeLabel: 'Preparation starts here', beforeTitle: 'Before the<br><em>race...</em>', beforeLead: 'A good plan leaves energy for what matters: the city, the people and the joy of running.', kitTitle: 'Race kit pickup', kitText: 'Your kit can be picked up on Thursday (8 October) and Friday (9 October), at Constitution Square, between 16:00 and 20:00, using your registration confirmation letter with its QR code and an identity document. It can also be picked up on Saturday and Sunday, although those days are usually reserved for people who do not live in Bucharest.', kitTip: 'The official race shirt may be collected at a different stand. After picking up your kit, use your race number (BIB) to collect the shirt from the separate stand.', gearTitle: 'Gear', gear1: 'Nothing new on race day: run at least once in the gear you plan to wear.', gear2: 'Have a light, familiar and tested breakfast 2-3 hours before the start.', gear3: 'For longer races, start fuelling at least one day before. Carbohydrates are recommended.', gear4: 'Watch out for chafing: anti-chafe cream and plasters can make all the difference.', scheduleTitle: 'Race schedule', sat: 'Saturday', satDesc: '10 km and 2.5 km individual races', sun: 'Sunday', sunDesc: '42 km individual and relay, plus 21 km', sunStart: '42 km and 21 km start', attention: 'ATTENTION', scheduleAttention: 'When entering Constitution Square, especially while crossing the boulevard, remember that the Wheelchair races start 15 minutes earlier.', routesTitle: 'Race routes', routesIntro: 'The event area has a cloakroom and storage for personal belongings. Races start on Liberty Boulevard, by Izvor Park, and finish at Constitution Square.', limit60: 'time limit: 60 minutes', limit90: 'time limit: 90 minutes', limit3: 'time limit: 3 hours', limit6: 'time limit: 6 hours', routeTip1: 'The time limit is measured from the race start to crossing the finish line.', routeTip2: 'Except for the 2.5 km race, hydration points and toilets are available.', routeTip3: 'Traffic is closed, but watch out for pedestrians.', routeTip4: 'Official photographers will be on the route; keep your BIB for photo access.', routeAttention1: 'For the 10 km race, the starting corridor is divided into sectors. You may enter only the sector assigned to your BIB.', routeAttention2: 'If you exceed the time limit, you may not be included in the official results.', importantTitle: 'Good to know', important1: 'Use public transport: Izvor metro station is the fastest option.', important2: 'On Saturday, meet at the stage at 08:45 for the group photo.', important3: 'For the 2.5 km race, gather near the stage around 11:45.', duringLabel: 'Stay in your rhythm', duringTitle: 'During the<br><em>race...</em>', duringLead: 'Listen to your body, let the crowds pass and save your energy for the final kilometres.', paceTitle: 'Race pace', paceText: 'Do not line up at the very front: those places are usually reserved for elite runners. Start controlled. For the first 1-2 km, run slightly slower than your target pace and do not immediately chase the seconds lost at the start.', pacersTitle: 'Pacer teams', pacersText: 'Pacers are experienced runners who keep a steady pace for a target finish time. You can identify them by their coloured flags. Stay with them, especially if this is your first race of this kind.', pacersTip: 'For the 2.5 km and 10 km races, you probably do not need gels or bars; a sufficient breakfast is enough.', hydrationTitle: 'Hydration points', hydrationText: 'The 10 km, 21 km and marathon routes have hydration points every 5 km. Pacers slow down in these areas to let runners refuel. Throw cups in the marked area.', safety: '⚠️ SAFETY', safetyText: 'If you feel dizzy, have visual disturbances or feel faint, stop running and move safely to the side of the route. For chest pain, breathing difficulties or a severe general condition, immediately ask the event medical teams for help.', hydrationTip: 'Reduce your speed gradually near hydration points and watch the runners around you.', afterLabel: 'The final kilometre is not the end', afterTitle: 'After the<br><em>race.</em>', afterLead: 'Cross the finish line, breathe and enjoy the result you built kilometre by kilometre.', resultsText: 'After crossing the finish line, you can find your position at', resultsSearch: 'Search by BIB or competitor name, checking the category of your race.', finishTip: 'At the FINISH gate, race volunteers will welcome you with your medal. After each race, you can access free water, soft drinks and fruit.', endLabel: 'See you at the start', endingTitle: 'Closing<br><em>with a smile.</em>', endLead: 'Our participation would not have been possible without the support and understanding of the people around us.', thanksTitle: 'Thanks', lastTipsTitle: 'Final advice', last1: 'Have a light breakfast at least 2 hours beforehand.', last2: 'Meet around 15 minutes before each race for the group photo.', last3: 'Do not push too hard: the goal is to have fun. Walk whenever you get tired.', last4: 'Stay hydrated and smile at the volunteers and supporters along the route.', contact: 'Questions about training or gear? Contact me on Teams or at <a href="mailto:anita@scor.com">anita@scor.com</a>.', backTop: 'Back to top ↑'
};

function setLanguage(language) {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'ro';
  document.title = isEnglish ? 'Before the race | Bucharest Marathon' : 'Înaintea cursei | Bucharest Marathon';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const translation = isEnglish ? english[element.dataset.i18n] : romanian.get(element.dataset.i18n);
    if (translation) element.innerHTML = translation;
  });
  languageSwitch.dataset.language = isEnglish ? 'ro' : 'en';
  languageSwitch.setAttribute('aria-label', isEnglish ? 'Schimbă în română' : 'Switch to English');
  languageSwitch.classList.toggle('is-en', isEnglish);
  localStorage.setItem('guide-language', language);
}

if (languageSwitch) languageSwitch.addEventListener('click', () => setLanguage(languageSwitch.dataset.language));
if (localStorage.getItem('guide-language') === 'en') setLanguage('en');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}

navGroups.forEach((group) => group.addEventListener('toggle', () => {
  if (group.open) navGroups.filter((other) => other !== group).forEach((other) => { other.open = false; });
}));
