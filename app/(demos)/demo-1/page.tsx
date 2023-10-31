import H1_SectionHero from "./_components/h1-hero";
import H1_SectionIntro from "./_components/h1-intro";
import H1_SectionHowItWork from "./_components/h1-how-it-work";
import H1_SectionBenefits from "./_components/h1-benefits";
import H1_SectionIngredients from "./_components/h1-ingredients";
import H1_Section_Stories from "./_components/h1-stories";
import H1_Section_Guarantees from "./_components/h1-guarantees";
import H1_Section_OrderNow from "./_components/h1-order-now";
import H1_Section_Galleries from "./_components/h1-galleries";

const Demo_1_Page = () => {
  return (
    <>
      {/* Hero */}
      <H1_SectionHero />

      {/* Intro */}
      <H1_SectionIntro />

      {/* How it Work */}
      <H1_SectionHowItWork />

      {/* Benefits */}
      <H1_SectionBenefits />

      {/* Ingredients */}
      <H1_SectionIngredients />

      {/* Group */}
      <section className="px-4 pt-24">
        <div className="container bg-white">
          {/* Stories */}
          <H1_Section_Stories />

          {/* Guarantees */}
          <H1_Section_Guarantees />

          {/* Order Now */}
          <H1_Section_OrderNow />
        </div>
      </section>

      {/* Galleries */}
      <H1_Section_Galleries />
    </>
  );
};

export default Demo_1_Page;
