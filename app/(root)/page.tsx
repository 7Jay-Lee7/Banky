import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "Jay", lastName: "Lee", email: "jaylee777@outlook" }
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and Manage your account and transactions with ease."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500.35}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 987.20}, {currentBalance: 11513.15}]}
      />
    </section>
  )
}

export default Home