import Article from "../../components/Article";
import Figure from "../../components/Figure/Figure"
import Acknowledgement from "../../components/Acknowledgement/Acknowledgement";
<<<<<<< HEAD
import BiologyTag from "../../components/Tag/BiologyTag";
import ContributorBox from "../../components/ContributorBox/contributorBox";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

function Post(){

    return (
    <>
        <Header />
        <Article
            title="Lights. Camera. Action!"
            subtitle="How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens"
            tag={BiologyTag}
            contributor={<>by Edward Chen<br></br>figures by Jovana Andrejevic</>}
            date="2021-07-05"
            length="8 min read"
        >
            <p>
                On a sunny, nondescript Hawaiian day, a <i>Vibrio fischeri</i> backterium arises the same as on most other nondescript days: homeless. It hurries along on a ride to work. No, not by car. Not onboard a trolley either. Yes! The great, dynamic Pacific Ocean current. Currency-free and open to all, it’s the road to opportunity and fortune for aquatic hard workers like the <i>V.fischeri</i> we are observing. Maybe even the acting job our protagonist hopes to get. If it had eyes, it would see that all around it were other applicants – after all, no job is guaranteed – other small, microscopic organisms that, like it, are homeless in an underwater, majority-homeless universe. The world really is teeming with life. For our silent, stubby V. fischeri, it’s not only a career on the line, but its livelihood. And not only its livelihood, but the livelihood of another animal we call the Hawaiian bobtail squid. Squid, meet <i>V. fischeri</i>. Bacterium, meet our reader. <i>Hi!</i>
            </p>
            <h4>
                What <i>is</i> the Hawaiian bobtail squid?
            </h4>
            <p>
                Hawaiian bobtail squids are small, primarily nocturnal creatures that hide by day and hunt by night. From dawn to dusk, they bury themselves under sand or mud to evade potential predators. Even so, their life is not as solitary as this habit might suggest. Instead, they associate with a single species of bacteria that literally lives inside them. Hence the casting call. (Trillions of bacteria live within you too.) The bacteria, <i>Vibrio fischeri</i>, have enzymes that produce blue-green light. In exchange for their natural bioluminescence, the squid provides nutrients such as sugars and amino acids for the bacteria, as well as a home within its light organ.
            </p>
            <h4>
                But why trade food for light?
            </h4>
            <p>
                Imagine looking towards the sky. (Better yet, actually do it!) You will see sunlight or, if it is nighttime, moonlight and starlight. If there is a bird flying nearby, why can you see it? Our visual system uses the contrast of objects against their background to distinguish them, whether it be a dark object against a light background, or a light object on a dark background.
            </p>
            <p>
                In the ocean, predators looking upwards can see sunlight or moonlight streaming down the water. Just as birds cast shadows, sunlight hitting prey lights them up as conspicuous, tasty dark spots. Scientists hypothesize that the Hawaiian bobtail squid benefits from generating light along their underside to help mask them from seals and other predators they may encounter. But won’t bright lights stand out to predators looking downwards toward the squid? That’s when the squid’s ink sac comes into play. Located above the light organ housing the bioluminescent bacteria, the ink absorbs any light being emitted upwards. The squid also has tissue that functions as a lens that, together with reflective proteins termed reflectins, work to direct light from the bacteria downwards. This method of camouflage is the principle of counter-illumination: Absorb on the top, shine on the bottom.
            </p>
            <Figure imgSrc="/fig1.jpg" imgAlt="Figure 1" captionPosition="below">
                <b>Figure 1: The principle of counter-illumination.</b> The squid matches the darker seafloor along its top surface and the brighter moonlit background along its bottom surface. This helps it blend in regardless of whether it appears above or below a predator scanning the water column. The concept of active camouflage is not unique to the Hawaiian bobtail squid; what is unique is the bacteria (and the squid’s anatomical features) that make this possible. <i>[♫ Oh, the grand old bobtail squid, It had V. fischeri; It swam them up to the top of the sea, And it swam them down again. When they were up, it was bright, And when they were down, it was dim; And when they were only halfway up, It was at once bright and dim. ♫]</i>
            </Figure>
            <p>
            Unrelated to the bacteria, the squid can also camouflage by using its chromatophores, pigmented cells that can be contracted or expanded to modify its color, and by carrying a covering of sand on top of itself, which adheres to its mucus secretions.
            </p>
            <h4>
                Is there more to counter-illumination than screwing in a lightbulb?
            </h4>
            <p>
                In the natural world, counter-illumination does not work with a constant light intensity. After all, moonlight does not shine consistently throughout the night. To address this reality, the squid can sense and adjust the bacteria’s bioluminescence. Additionally, the bacteria produce light in a cyclical pattern that follows the onset of darkness. Researchers have hypothesized that this is because the squid limits the availability of oxygen, which is necessary for generating light, during the day. A similar phenomenon has been observed in ponyfishes.
            </p>
            <p>
                Light production by the bacteria also depends on its population density within the light organ, which is sensed through a mechanism termed quorum sensing. Coincidentally, quorum sensing was first discovered in <i>V. fischeri</i> before its mutually beneficial relationship with the Hawaiian bobtail squid, a now iconic example of <i>symbiosis</i>, first became an area of study. Another fun <i>Vibrio</i> fact: A different <i>Vibrio</i> strain produces the pufferfish toxin!
            </p>
            <p>
                Research has also shown that the bacteria’s light affects the squid’s internal daily rhythm, or circadian rhythm, and what proteins the squid makes, including proteins involved in vision and gas exchange. The daily cycle is important: Both squid and bacteria change the quantity of proteins they make over the course of a day. This continuous adjusting is expected because the squid supplies different nutrients during the day and the night, and because the bacteria has a greater need for energy at night when it generates light.
            </p>
            <p>
                Think of all this crosstalk as a squid director choreographing a whole cast of thalassic, thespian bacteria in a sunset-to-sunrise symphony starring sparkling shimmers. A light show where more than rave reviews are at stake. A timeless, fiery feature flick that truly posits – yet simultaneously questions – the inherently limited nature of nature; the inescapable transience of existence. Tuned just right, this is an opportunity for the literal—and metaphorical—small guy to beat the metaphorical—and literal—big guy. This is a repeat performance that somehow tricks those bigger-brained seals into missing out on a meal. Beautifully, it works! These two small life forms, tiny think-meat and all, come together to outwit much larger predators. Who ever said bigger brains are smarter?
            </p>
            <h4>
                You said something about homelessness?
            </h4>
            <p>
                Even after finding a Hawaiian bobtail squid and making its way into the light organ, which already is difficult, the bacteria do not have it easy. For starters, bacteria that produce less light are outcompeted by those that produce more light. This may be because oxygen consumption from the light-generating reaction prevents the squid from using that oxygen to generate pesky, harmful reactive oxygen species. Also, low oxygen levels may cause the squid’s surface-lining cells to secrete more nutrients.
            </p>
            <p>
                But even when the bacteria do work hard, shelter is still not guaranteed. Each dawn, as the sun rises, the squid expels 95% of the bacteria within it by thinning the tissue in its light organ. The circadian rhythm is important here too as the squid cells start making more structural, cytoskeleton proteins just before dawn, in alignment with the daily shedding. This increases the local oceanic bacteria level by up to 30 times, which partially helps newborn squid collect bacteria of their own, and regulates bacteria levels within the host squid, which rebounds by mid-afternoon. And so, without fail, nineteen out of every twenty bacteria will find themselves wandering the seas again, waking up in the morning as strangers to the harsh world – in need of a job; in search of a home.
            </p>
            <h4>
                How can studying the squid and <i>Vibrio fischeri</i> inform humankind?
            </h4>
            <p>
                Reportedly, even the Air Force has turned to this tiny seafloor-dwelling squid for inspiration. Howard Hughes Medical Institute’s BioInteractive writes that military researchers have studied the squid and its exclusive symbiotic relationship with <i>V. fischeri</i> to design better camouflage for airplanes. What is more certain is that counter-illumination experiments in the early 1940s were not followed through because mankind was simultaneously developing something that does not need to “see” in the traditional sense: radar, which cannot be fooled by bright lights. Luckily for the squid, it seems this is not a feature it needs to outsmart.
            </p>
            <Figure imgSrc="/fig2.png" imgAlt="figure 2" captionPosition="below">
                <p>
                    <b>Figure 2: Possible applications that utilize the principles of squid-bacteria symbiosis.</b> From dusky to dazzling and everything in between, this multifaceted pair has a lot to offer. Can engineers design stealthier airplanes? Camouflage that hides objects from infrared detectors? Improved proton transistors for next-generation bioelectronics? While airplanes coated with living, breathing, and glowing bacteria may sound silly, there may be other innovations that learn from the Hawaiian bobtail squid’s remarkable relationship with <i>Vibrio fischeri</i>.
                </p>
            </Figure>
            <p>
                And so concludes our dive into a world-reaching performance most of the world will never see. The next time you head to a theater, consider the one that is unscripted and outdoors, with chirps and clicks and whooshes and warbles. The big screen is big, but the small sights you will see, hear, and smell once you open your mind to adventure are even bigger—and larger than life.
            </p>
            <p>
                The next morning, our protagonist might find itself starting out a nondescript day like it does most other nondescript days: homeless. Or, it might be lucky and find it kept a spot within its favorite bed and breakfast. Either way, both actor and director will continue a cycle that ticks the ecosystem along, one night at a time.
            </p>

            <Acknowledgement>
            <p>
                Cover Image: “Hawaiian Bobtail Squid” is licensed under CC BY-NC 4.0.
            </p>
            </Acknowledgement>
        </Article>
        <div style={{marginLeft:"50%",transform:"translateX(-50%)"}}>
            <ContributorBox 
                contributorName="Edward Chen"
                desc="Edward Chen is a first-year Immunology MMSc student at Harvard Medical School. Though he used to think of himself as a seal person, writing this article has leaned him towards squid people."
                image="/SciQuel_1.png"
                />
            <ContributorBox 
                contributorName="Jovana Andrejevic"
                desc="Jovana Andrejevic is a fifth-year Applied Physics Ph.D. student in the School of Engineering and Applied Sciences at Harvard University. She’s open-minded and is neither a squid nor a seal person."
                image="/SciQuel_1.png"
                />
        </div>
        <Footer />
    </>);
=======
// import Head from "next/head";
// import Date from "../../components/date"
// import utilStyles from "../../styles/utils.module.css"
import ContributorBox from "../../components/Article/ContributorBox/ContributorBox";
import DefBox from "../../components/Article/DefinitionBox/DefBox";
// import Tag from "../../components/Tags/tag";


function Post(){

    const term = "Esential Amino Acid";
    const definition = "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens. How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
    const inContext = "How the Hawaiian bobtail squid brings a creative vision to its maritime world of small big screens";
    const contributorName = 'Edward Chen';
    const desc = 'Edward Chen is a second-year Immunology MMSc student at Harvard Medical School. He wonders whether there’s a biologically useful concept of “Hycean organisms”; humans, after all, are up to 60% water.';
    const image = "/SciQuel_1.png";

    return (
        <>
            <Article
                title={<>
                    <i>Vibrio fischeri</i> and the Hawaiian bobtail squid: A beautiful example of ecology
                </>}
                subtitle={<>A tale of two phyla. The Special Relationship of biology.</>}
                tag="biology"
                contributor={<>by Edward Chen<br></br>figures by Jovana Andrejevic</>}
                date="2021-07-05"
                length="8 min read"
            >
                <p>
                    Off the coast of Hawaii live majestic humpback whales, mysterious argonauts, and myriad mahimahis. A uniquely isolated archipelago with many habitat types and 137 islands, Hawaii is a biodiversity hotspot with over 25,000 species that call it home, at least 10,000 of which cannot be found anywhere else in the world. But today, we’ll focus on an animal over 500 times smaller than the humpback whale: the Hawaiian bobtail squid (Euprymna scolopes). This squid, though it grows to a mere 35 millimeters—under half the diameter of a baseball!—has been purposefully studied in the laboratory since at least 1972 and is now the subject of hundreds of academic papers. Clearly (or not), there must be something special about it. How can a species so physically small attract scientific attention so disproportionally large? What has it, for lack of a better word, inked?
                </p>
                <h4>
                    What makes the Hawaiian bobtail squid special?
                </h4>
                <p>
                    Did a scientist decide on a whim that the Hawaiian bobtail squid was worth studying? Chance may have played a role, but there are other reasons too. The squid has several traits that make it an ideal model organism: It’s small. It grows rapidly. And it’s available year-round. This means that scientists can reliably access, manipulate, and study it in a lab. Importantly, the squid only associates with a single bacterial species – Vibrio fischeri – making their relationship easier to understand than, say, a relationship involving one of the over 10,000 microbes living in and on humans. The close, and often beneficial, interaction between two species is termed symbiosis. In return for nutrients supplied by the squid, the bacteria produce light that helps camouflage its host. (Downwelling sunlight casts shadows that predators can see; the bacteria’s light minimizes the squid’s shadow.)
                </p>
                <p>
                    Because the squid is born without any bacteria within it, and can survive independently, isolating newborn squid within an hour of hatching allows researchers to study the squid without the influence of its symbiont. Researchers can similarly study the bacteria when it is outside of the squid. And, predictably, researchers can study the squid and bacteria’s extensive partnership and interconnection.
                </p>
                <h4>
                    How do squid and bacteria find their respective partner?
                </h4>
                <p>
                    From the outset, the lives of squid and bacteria are intertwined. Even though Vibrio fischeri is relatively rare, accounting for under 0.1% of bacteria in Hawaiian seawater, juvenile squid capture enough bacteria to become bioluminescent within a single day. And despite that relative rarity, the Hawaiian bobtail squid does not host any other bacterial species, including those that are much more abundant. These two organisms seem to be made for each other, and only each other. How can this be?
                </p>
                <p>
                    The Hawaiian bobtail squid creates a very unpleasant environment for most bacterial species with both physical and chemical deterrents. Any potential inhabitant encounters numerous hazards. Immune cells gobble up foreign invaders, constant water flow washes away trespassers, mucus traps and sheds microorganisms, and enzymes bring about toxic, bacteria-killing molecules. At this point, it may be a bit of a surprise that V. fischeri can even colonize the Hawaiian bobtail squid.
                </p>
                <p>
                    Like humans, squids need oxygen to sustain their tissues and survive. Squids obtain this oxygen by drawing in seawater—which teems with a multitude of bacteria—through their mantle cavity, passing it through their gills, and expelling it through their siphon. The Hawaiian bobtail squid is no exception. However, its anatomy is slightly different; intaken seawater is routed past a duct that leads to the light organ where V. fischeri eventually thrives.
                </p>
                <p>
                    Most bacteria will never interact with the squid and will leave on the same stream of water that carries them in. Nevertheless, some bacteria will be captured by mucus secreted by surface-lining cells – epithelial cells in biological parlance – at the entrance of the duct. V. fischeri senses and migrates towards certain complex carbohydrates, amino acids, and sugars present in the mucus. This precise attraction is specific to V. fischeri and even other Vibrio species do not exhibit the same behavior. Epithelial cells with cilia, which are small, hair-like protrusions, create currents that further help V. fischeri aggregate in the mucus.
                </p>
                <p>
                    Aggregating allows V. fischeri to attempt a push across one of 6 ducts (in the juvenile squid; adults have 2), through an antechamber, past a microns-wide bottleneck, and into one of 6 crypts of the light organ, a task made more arduous by duct-lining cilia that continuously sweep particles outward. Unlike most bacteria, V. fischeri can make it through the duct because it has a tuft of flagella, a tail-like structure that allows the bacteria to move freely.
                </p>
                <p>
                    Physical challenges aren’t all; the squid secretes harsh chemicals that V. fischeri uniquely has the ability to degrade. Other molecules produced by V. fischeri also help it embed itself within the light organ, such as by producing biofilms critical to bacterial aggregation. In the end, for each of the 6 light organ crypts, only one or two V. fischeri prevails in establishing itself.
                </p>
                <Figure imgSrc="/fig1.png" imgAlt="figure 1" captionPosition="below">
                    <p>
                        <b>Figure 1: The path to the light organ.</b> The Hawaiian bobtail squid draws in 1.3 microliters of seawater with each ventilation cycle, and ventilates twice every second. With about a thousand bacteria in each microliter of seawater, that’s around 225 million bacteria each day!—a literal millions upon millions of bacteria ride the constant stream of water into the squid. The vast majority of those many millions of bacteria do not stay within the squid, but one species does. Though it comprises under 0.1% of seawater, V. fischeri is the only species that swimmingly latches onto the squid’s mucus and then travels through ducts to ultimately reside in one of 6 light organ crypts. While the journey is not as simple as that implies, this still illustrates the strong selective factors that must come into play for only a single, relatively non-abundant species of bacteria to colonize the Hawaiian bobtail squid’s light organ. The twice a second ventilation also means each bacterium has just half a second time to be either selected for (and captured by the mucus), or selected against (and ejected with the water).
                    </p>
                </Figure>
                <h4>
                    So the squid subject the bacteria to a rigorous selection process. Do the bacteria affect the squid too?
                </h4>
                <p>
                    Just as the squid plays an outsized role in the bacteria’s life, the bacteria affect the juvenile squid’s development. Case in point: Ever heard of “structure determines function?” In the juvenile squid, the light organ functions to capture V. fischeri. In the adult squid, its primary role is to retain and support the bacteria. It makes sense, then, that the light organ is structurally different at different life stages.
                </p>
                <p>
                    The bacteria produce lipopolysaccharides (LPS) and peptidoglycans (PGN), molecules which are classically pathogenic and disease-causing in other organisms, that instead play a critical role in maturation of the light organ. While other bacteria produce these molecules as well, they are primarily secreted by the rotation of V. fischeri’s flagella, an uncommon structure that most bacteria lack. When the light organ is populated, the ciliated epithelial cells that were essential for V. fischeri to gain entry in the first place are killed through apoptosis, or programmed cell death, over a 4-day period. This irreversible change in the light organ’s structure, akin to shutting the door on other bacteria, only happens with signaling from V. fischeri. In experiments where mutated V. fischeri could not cause this transformation, the mutated V. fischeri faced increased competition from other bacteria, which is undesirable as other bacteria do not produce light that helps the squid.
                </p>
                <p>
                    Once colonization happens, the squid also stops secreting mucus, which is necessary to trap bacteria at the entrance of the light organ. Notably, the squid is extremely sensitive to the bacteria’s presence. When just 3 to 5 bacterial cells interact with cilia in the squid’s light organ, immune cells migrate to the light organ. As a final example of how the squid and bacteria are dynamically linked, the bacteria changes the expression of squid genes in not only the light organ itself, to favor the migration of more V. fischeri, but in the eyes and gills as well, two areas relatively remote from the light organ. This is light-dependent as mutating V. fischeri to eliminate its light production reduced the changes in gene expression by two-thirds.
                </p>
                <Figure imgSrc="/fig2.png" imgAlt="figure 2" captionPosition="below">
                    <p>
                        <b>Figure 2: From structure to function.</b> V. fischeri that has been successfully recruited to the light organ secrete molecules known as lipopolysaccharides (LPS) and peptidoglycans (PGN) by rotating their flagella. These molecules signal to certain cells of the squid light organ, triggering them to die. At first glance, this may seem to be harmful to the squid. In reality, this benefits both squid and bacteria. The cells that had earlier secreted mucus to accumulate V. fischeri outside of the light organ can no longer help other bacteria that do not benefit the squid. By hindering other bacteria from also entering the light organ, the squid and bacteria together impede potential competitors to V. fischeri. This is an example of structure relating to function: The juvenile light organ needs to recruit V. fischeri from surrounding seawater while the mature, adult light organ needs to maintain the continued survival of V. fischeri within it. An additional example: V. fischeri settled in the light organ lose their flagella.
                    </p>
                </Figure>
                <p>
                    Since it was first described in 1913, the Hawaiian bobtail squid has captured intense scientific attention. We now better understand communication across species, which can be incredibly and unexpectedly versatile, with the bacteria physically altering the squid, transforming its gene expression, and driving its internal circadian rhythm. We now know that lipopolysaccharides, traditionally thought to be pro-inflammatory and solely “bad,” can be anti-inflammatory too. We can also study tissues that interact with light, which has already had technological implications; quorum sensing, which may have relevance to diseases such as pneumonia; and even squid development, which is possible because the juvenile squid is transparent. And it is all thanks to this unassuming squid and its unrivaled “special relationship” with an equally unassuming bacteria.
                </p>
                <Figure imgSrc="/fig3.gif" imgAlt="figure 3" captionPosition="right">
                    <p>
                        <b>Figure 3: Showing off alternate figure layouts.</b> Using the &quot;captionPosition&quot; prop, a Figure component can display its caption in three different positions: left, below, and right. The previous two captions used the &quot;below&quot; layout, and this one uses the &quot;right&quot; layout. This layout more closely resembles the example Figure from the Figma mock-up.
                    </p>
                </Figure>
                <Figure imgSrc="/fig4.gif" imgAlt="figure 4" captionPosition="left">
                    <p>
                        <b> Figure 4: Using the &quot;left&quot; captionPosition prop.</b> The left and right caption positions are better suited for images that are taller than they are wide. Trying to squeeze a wide picture horizontally next to text will end up shrinking the picture down so that the image can fit within the Figure div. Likewise, trying to put a tall image into the &quot;below&quot; captionPosition layout will shrink the tall image. Different layouts are better suited for differently sized images!
                    </p>
                    <p>
                        This figure also has a second paragraph as a separate element. Both this paragraph and the previous are wrapped in a div by the Figure component.
                    </p>
                </Figure>
                <p>
                    In conclusion, the opening paragraph is repeated here to demonstrate how the footer looks compared to text. Off the coast of Hawaii live majestic humpback whales, mysterious argonauts, and myriad mahimahis. A uniquely isolated archipelago with many habitat types and 137 islands, Hawaii is a biodiversity hotspot with over 25,000 species that call it home, at least 10,000 of which cannot be found anywhere else in the world. But today, we’ll focus on an animal over 500 times smaller than the humpback whale: the Hawaiian bobtail squid (Euprymna scolopes). This squid, though it grows to a mere 35 millimeters—under half the diameter of a baseball!—has been purposefully studied in the laboratory since at least 1972 and is now the subject of hundreds of academic papers. Clearly, there must be something special about it.
                </p>
                <Acknowledgement>
                    <p>
                        Edward Chen is a second-year Immunology MMSc student at Harvard Medical School.
                    </p>
                    <p>
                        Jovana Andrejevic is a sixth-year Applied Physics Ph.D. student in the School of Engineering and Applied Sciences at Harvard University.
                    </p>
                </Acknowledgement>
            </Article>
        </>
        
    );
>>>>>>> 8123e24752a66d1abfcfab0ac38d76e0713e946f
}

export default Post;
