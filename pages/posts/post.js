import Article from "../../components/Article";
import Figure from "../../components/Figure/Figure";
import Acknowledgement from "../../components/Acknowledgement/Acknowledgement";
import BiologyTag from "../../components/Tag/BiologyTag";
import ContributorBox from "../../components/ContributorBox/contributorBox";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DefBox from "../../components/DefinitionBox/defBox";

import styles from "./post.module.css";
import defStyles from "../../components/DefinitionBox/defBox.module.css";

import { useEffect, useRef, useLayoutEffect } from "react";

/* global document */
function Post() {
  const defBox = useRef();
  const defText = useRef();
  const cancelBtn = useRef();
  const page = useRef();

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      defBox.current.classList.remove(defStyles.show);
      defBox.current.classList.add(defStyles.hide);
      cancelBtn.current.classList.remove(defStyles.show);
      cancelBtn.current.classList.add(defStyles.hide);
    }
  };
  const handleMousedown = () => {
    if (
      typeof window !== "undefined" &&
      defBox.current.classList.contains(defStyles.show)
    ) {
      defBox.current.classList.remove(defStyles.show);
      defBox.current.classList.add(defStyles.hide);
      cancelBtn.current.classList.remove(defStyles.show);
      cancelBtn.current.classList.add(defStyles.hide);
    }
  };

  useEffect(() => {
    // hide defbox initially
    defBox.current.classList.add(defStyles.hide);
    cancelBtn.current.classList.add(defStyles.hide);

    // click to toggle defBox
    defText.current.addEventListener("mouseup", () => {
      if (defBox.current.classList.contains(defStyles.hide)) {
        defBox.current.classList.remove(defStyles.hide);
        defBox.current.classList.add(defStyles.show);
        cancelBtn.current.classList.remove(defStyles.hide);
        cancelBtn.current.classList.add(defStyles.show);
        window.addEventListener("scroll", handleScroll);
        page.current.addEventListener("mousedown", handleMousedown);
      } else {
        defBox.current.classList.remove(defStyles.show);
        defBox.current.classList.add(defStyles.hide);
        cancelBtn.current.classList.remove(defStyles.show);
        cancelBtn.current.classList.add(defStyles.hide);
        window.removeEventListener("scroll", handleScroll);
        page.current.removeEventListener("mousedown", handleMouseDown);
      }
    });
    // click 'x' to hide defBox
    cancelBtn.current.addEventListener("click", () => {
      defBox.current.classList.remove(defStyles.show);
      defBox.current.classList.add(defStyles.hide);
      cancelBtn.current.classList.remove(defStyles.show);
      cancelBtn.current.classList.add(defStyles.hide);
    });

    // if (defBox.current.classList.contains(defStyles.show)){
    // text.current.onclick = () => {
    //   console.log("clicked");
    //   defBox.current.classList.remove(defStyles.show);
    //   defBox.current.classList.add(defStyles.hide);
    //   cancelBtn.current.classList.remove(defStyles.show);
    //   cancelBtn.current.classList.add(defStyles.hide);
    //   }
    // };

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scroll = () => {};

  return (
    <>
      <Header />
      <div ref={defBox}>
        <DefBox
          term="Lorem ipsum"
          definition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis efficitur lorem id fermentum."
          inContext="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        />
      </div>
      <div ref={page}>
        <Article
          title="Lights. Camera. Action!"
          subtitle="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
          tag={BiologyTag}
          contributors={{
            Article: "Edward Chen",
            Figures: "Jovana Andrejevic",
          }}
          date="2021-07-05"
          length="8 min read"
        >
          <button ref={cancelBtn} className={defStyles.cancel}></button>
          <div>
            <p>
              On a sunny, nondescript Hawaiian day, a{" "}
              <button
                ref={defText}
                onScroll={scroll()}
                className={styles.defText}
              >
                Vibrio fischeri
              </button>
              backterium arises the same as on most other nondescript days:
              homeless. It hurries along on a ride to work. No, not by car. Not
              onboard a trolley either. Yes! The great, dynamic Pacific Ocean
              current. Currency-free and open to all, it’s the road to
              opportunity and fortune for aquatic hard workers like the{" "}
              <i>V.fischeri</i> we are observing. Maybe even the acting job our
              protagonist hopes to get. If it had eyes, it would see that all
              around it were other applicants – after all, no job is guaranteed
              – other small, microscopic organisms that, like it, are homeless
              in an underwater, majority-homeless universe. The world really is
              teeming with life. For our silent, stubby V. fischeri, it’s not
              only a career on the line, but its livelihood. And not only its
              livelihood, but the livelihood of another animal we call the
              Hawaiian bobtail squid. Squid, meet <i>V. fischeri</i>. Bacterium,
              meet our reader. <i>Hi!</i>
              <br />
              <br />
            </p>
            <h4>
              What <i>is</i> the Hawaiian bobtail squid?
            </h4>
            <p>
              Hawaiian bobtail squids are small, primarily nocturnal creatures
              that hide by day and hunt by night. From dawn to dusk, they bury
              themselves under sand or mud to evade potential predators. Even
              so, their life is not as solitary as this habit might suggest.
              Instead, they associate with a single species of bacteria that
              literally lives inside them. Hence the casting call. (Trillions of
              bacteria live within you too.) The bacteria,{" "}
              <i>Vibrio fischeri</i>, have enzymes that produce blue-green
              light. In exchange for their natural bioluminescence, the squid
              provides nutrients such as sugars and amino acids for the
              bacteria, as well as a home within its light organ.
              <br />
              <br />
            </p>
            <h4>But why trade food for light?</h4>
            <p>
              Imagine looking towards the sky. (Better yet, actually do it!) You
              will see sunlight or, if it is nighttime, moonlight and starlight.
              If there is a bird flying nearby, why can you see it? Our visual
              system uses the contrast of objects against their background to
              distinguish them, whether it be a dark object against a light
              background, or a light object on a dark background.
            </p>
            <p>
              In the ocean, predators looking upwards can see sunlight or
              moonlight streaming down the water. Just as birds cast shadows,
              sunlight hitting prey lights them up as conspicuous, tasty dark
              spots. Scientists hypothesize that the Hawaiian bobtail squid
              benefits from generating light along their underside to help mask
              them from seals and other predators they may encounter. But won’t
              bright lights stand out to predators looking downwards toward the
              squid? That’s when the squid’s ink sac comes into play. Located
              above the light organ housing the bioluminescent bacteria, the ink
              absorbs any light being emitted upwards. The squid also has tissue
              that functions as a lens that, together with reflective proteins
              termed reflectins, work to direct light from the bacteria
              downwards. This method of camouflage is the principle of
              counter-illumination: Absorb on the top, shine on the bottom.
              <br />
              <br />
            </p>
            <Figure
              imgSrc="/fig1.jpg"
              imgAlt="Figure 1"
              captionPosition="below"
            >
              <b>Figure 1: The principle of counter-illumination.</b> The squid
              matches the darker seafloor along its top surface and the brighter
              moonlit background along its bottom surface. This helps it blend
              in regardless of whether it appears above or below a predator
              scanning the water column. The concept of active camouflage is not
              unique to the Hawaiian bobtail squid; what is unique is the
              bacteria (and the squid’s anatomical features) that make this
              possible.{" "}
              <i>
                [♫ Oh, the grand old bobtail squid, It had V. fischeri; It swam
                them up to the top of the sea, And it swam them down again. When
                they were up, it was bright, And when they were down, it was
                dim; And when they were only halfway up, It was at once bright
                and dim. ♫]
              </i>
            </Figure>
            <p>
              Unrelated to the bacteria, the squid can also camouflage by using
              its chromatophores, pigmented cells that can be contracted or
              expanded to modify its color, and by carrying a covering of sand
              on top of itself, which adheres to its mucus secretions.
              <br />
              <br />
            </p>
            <h4>
              Is there more to counter-illumination than screwing in a
              lightbulb?
            </h4>
            <p>
              In the natural world, counter-illumination does not work with a
              constant light intensity. After all, moonlight does not shine
              consistently throughout the night. To address this reality, the
              squid can sense and adjust the bacteria’s bioluminescence.
              Additionally, the bacteria produce light in a cyclical pattern
              that follows the onset of darkness. Researchers have hypothesized
              that this is because the squid limits the availability of oxygen,
              which is necessary for generating light, during the day. A similar
              phenomenon has been observed in ponyfishes.
            </p>
            <p>
              Light production by the bacteria also depends on its population
              density within the light organ, which is sensed through a
              mechanism termed quorum sensing. Coincidentally, quorum sensing
              was first discovered in <i>V. fischeri</i> before its mutually
              beneficial relationship with the Hawaiian bobtail squid, a now
              iconic example of <i>symbiosis</i>, first became an area of study.
              Another fun <i>Vibrio</i> fact: A different <i>Vibrio</i> strain
              produces the pufferfish toxin!
            </p>
            <p>
              Research has also shown that the bacteria’s light affects the
              squid’s internal daily rhythm, or circadian rhythm, and what
              proteins the squid makes, including proteins involved in vision
              and gas exchange. The daily cycle is important: Both squid and
              bacteria change the quantity of proteins they make over the course
              of a day. This continuous adjusting is expected because the squid
              supplies different nutrients during the day and the night, and
              because the bacteria has a greater need for energy at night when
              it generates light.
            </p>
            <p>
              Think of all this crosstalk as a squid director choreographing a
              whole cast of thalassic, thespian bacteria in a sunset-to-sunrise
              symphony starring sparkling shimmers. A light show where more than
              rave reviews are at stake. A timeless, fiery feature flick that
              truly posits – yet simultaneously questions – the inherently
              limited nature of nature; the inescapable transience of existence.
              Tuned just right, this is an opportunity for the literal—and
              metaphorical—small guy to beat the metaphorical—and literal—big
              guy. This is a repeat performance that somehow tricks those
              bigger-brained seals into missing out on a meal. Beautifully, it
              works! These two small life forms, tiny think-meat and all, come
              together to outwit much larger predators. Who ever said bigger
              brains are smarter?
              <br />
              <br />
            </p>
            <h4>You said something about homelessness?</h4>
            <p>
              Even after finding a Hawaiian bobtail squid and making its way
              into the light organ, which already is difficult, the bacteria do
              not have it easy. For starters, bacteria that produce less light
              are outcompeted by those that produce more light. This may be
              because oxygen consumption from the light-generating reaction
              prevents the squid from using that oxygen to generate pesky,
              harmful reactive oxygen species. Also, low oxygen levels may cause
              the squid’s surface-lining cells to secrete more nutrients.
            </p>
            <p>
              But even when the bacteria do work hard, shelter is still not
              guaranteed. Each dawn, as the sun rises, the squid expels 95% of
              the bacteria within it by thinning the tissue in its light organ.
              The circadian rhythm is important here too as the squid cells
              start making more structural, cytoskeleton proteins just before
              dawn, in alignment with the daily shedding. This increases the
              local oceanic bacteria level by up to 30 times, which partially
              helps newborn squid collect bacteria of their own, and regulates
              bacteria levels within the host squid, which rebounds by
              mid-afternoon. And so, without fail, nineteen out of every twenty
              bacteria will find themselves wandering the seas again, waking up
              in the morning as strangers to the harsh world – in need of a job;
              in search of a home.
              <br />
              <br />
            </p>
            <h4>
              How can studying the squid and <i>Vibrio fischeri</i> inform
              humankind?
            </h4>
            <p>
              Reportedly, even the Air Force has turned to this tiny
              seafloor-dwelling squid for inspiration. Howard Hughes Medical
              Institute’s BioInteractive writes that military researchers have
              studied the squid and its exclusive symbiotic relationship with{" "}
              <i>V. fischeri</i> to design better camouflage for airplanes. What
              is more certain is that counter-illumination experiments in the
              early 1940s were not followed through because mankind was
              simultaneously developing something that does not need to “see” in
              the traditional sense: radar, which cannot be fooled by bright
              lights. Luckily for the squid, it seems this is not a feature it
              needs to outsmart.
              <br />
              <br />
            </p>
            <Figure
              imgSrc="/fig2.png"
              imgAlt="figure 2"
              captionPosition="below"
            >
              <b>
                Figure 2: Possible applications that utilize the principles of
                squid-bacteria symbiosis.
              </b>{" "}
              From dusky to dazzling and everything in between, this
              multifaceted pair has a lot to offer. Can engineers design
              stealthier airplanes Camouflage that hides objects from infrared
              detectors? Improved proton transistors for next-generation
              bioelectronics? While airplanes coated with living, breathing, and
              glowing bacteria may sound silly, there may be other innovations
              that learn from the Hawaiian bobtail squid’s remarkable
              relationship with <i>Vibrio fischeri</i>.
            </Figure>
            <p>
              And so concludes our dive into a world-reaching performance most
              of the world will never see. The next time you head to a theater,
              consider the one that is unscripted and outdoors, with chirps and
              clicks and whooshes and warbles. The big screen is big, but the
              small sights you will see, hear, and smell once you open your mind
              to adventure are even bigger—and larger than life.
            </p>
            <p>
              The next morning, our protagonist might find itself starting out a
              nondescript day like it does most other nondescript days:
              homeless. Or, it might be lucky and find it kept a spot within its
              favorite bed and breakfast. Either way, both actor and director
              will continue a cycle that ticks the ecosystem along, one night at
              a time.
            </p>
          </div>
          <Acknowledgement>
            Cover Image: “Hawaiian Bobtail Squid” is licensed under CC BY-NC
            4.0.
          </Acknowledgement>
        </Article>
        <div
          style={{
            marginLeft: "48%",
            marginTop: "10%",
            marginBottom: "5%",
            transform: "translateX(-50%)",
          }}
        >
          <ContributorBox
            contributorName="Edward Chen"
            desc=" is a first-year Immunology MMSc student at Harvard Medical School. Though he used to think of himself as a seal person, writing this article has leaned him towards squid people."
            image="/SciQuel_1.png"
          />
          <ContributorBox
            contributorName="Jovana Andrejevic"
            desc=" is a fifth-year Applied Physics Ph.D. student in the School of Engineering and Applied Sciences at Harvard University. She’s open-minded and is neither a squid nor a seal person."
            image="/SciQuel_1.png"
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Post;
