import React from 'react'
import FinancialOptionsCard from './ChecklistCard'

//  KATEGORIEN
// wobei will user unterstützung? Checkboxes mit heading und Erklärungsdropdown und ggf Slider?
  // tracken?
  // 1. Schulden? tracken -> wenn ja 50-30-20 rule, 20 in Schuldentilgung
  // 1a. bestehen Krediten?
  // 1b. oder Dispo?

  // 2. Eigene Budgets setzen:
  // -> hier BudgetCRUD?
  // 2a.  Alarmiere mich, wenn ich mein Budget überschreite (per farbe?)

  // 3. Goals/Wishlist Tracker 
        // -> hier CRUD?

  // 4. 30-50-20 regel: 30% für Leben, Wohnen, Essen, 50% für Spaß/ freiwillige Ausgaben, 20% für Sparen+ Investitionen
    // 4.a nach eigenen Bedürfnissen justierbar mit Slider Range für 3 component total100%?

  // 5. Notgroschen: 3 Monatsnettogehälter gespart -> = extra Konto in unserer app? -> brauchen wir dann noch section other konten für kontoübersicht?
      // EInnahmen : 6 x 3
      // Extrakonto

  // 6. weniger ausgeben als man verdient - ist schon in einkommen/ausgaben last 6 months drin..







  // --> AUSWERTUNG DISPLAYEN
  // via Dashbord? UserDashboard? Neues Dashboard Finanzgesundheit/Auswertung/Statistik?
  // + Report (statistik der letzten monate+ alles was getracked werden soll?, meiste einnahmen von/ausgaben für?),? PDFd download feature? 
  // Alert/Coloring??



  // --> DATENSTRUKTUR - jeweils ein fetch?
  // const userInformation = {
  //   username: string,
  //   email: string,
  //   profilePicture: string,
  //   financialOptions:{
  //     trackHabits: boolean,
  //     trackHabitsSettings: {
  //       budgets:{
  //         isTracked: boolean,
  //         budgetItems:  {
  //           Steam: { now: 30, of: 200, percent: 15},
  //           Food: {now: 30, of: 1500, percent: 20},
  //           Rabbitfood: {now: 50, of: 100, percent: 50},

  //   },
  //       emergencyFund: {
  //         isTracked: boolean,
  //         amountEmergencyFund:number,
  //   }, 
  //       goalsWishlist: {
  //         isTracked: boolean,
  //         wishlistItems: {
  //           Car: { now: 0, of: 10000, percent: 0, fulfilled: false},
  //           House: { now: 0, of: 100000, percent: 0, fulfilled: false},
  //   },
  //       30-50-20 rule: {
  //         isTracked: boolean,
  //         isCustomized: boolean,
  //         customAmounts: {
  //           needs: default 30,
  //           wants: defualt 50,
  //           savings: default 20,
  //         },
  //       },
  //       avoidDebts: {
  //         isTracked: boolean,
  //         isCustomized: boolean,
  //         customAmounts: {
  //           credit: default 0,
  //           overdraft: default 0,
  //         },
  // }


// financialHealthSettings: {
//   trackHabits: boolean,
//   trackHabitsSettings: {
    // budgets:{
      // isTracked: boolean,
      // budgetItems:  {
        //   Steam: { now: 30, of: 200, percent: 15},
        //   Food: {now: 30, of: 1500, percent: 20},
        //   Rabbitfood: {now: 50, of: 100, percent: 50},
// };
    // emergencyFund: {
      // isTracked: boolean,
      // amountEmergencyFund:number,
// },
    // goalsWishlist: {
      // isTracked: boolean,
      // wishlistItems: {
        // Car: { now: 0, of: 10000, percent: 0, fulfilled: false},
        // House: { now: 0, of: 100000, percent: 0, fulfilled: false},
// },
    // 30-50-20 rule: {
      // isTracked: boolean,
      // isCustomized: boolean,
      // customAmounts: {
        // needs: default 30,
        // wants: defualt 50,
        // savings: default 20,
      // }
    // },
    // avoidDebts: {
      // isTracked: boolean,
    // }
//}

function FinancialOptionsPage() {
  return (
    <div className="w-full">
    <div className="m-3 flex min-h-screen w-full flex-col items-center bg-mm-background text-mm-text-dark">
     i am financial options page
     <FinancialOptionsCard />
    </div>
  </div>
  )
}

export default FinancialOptionsPage