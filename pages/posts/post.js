import Article from "../../components/Article";
import Figure from "../../components/Figure/Figure"
import Acknowledgement from "../../components/Acknowledgement/Acknowledgement";

function Post(){
    return (
        <Article
            title={<>
                <i>Vibrio fischeri</i> and the Hawaiian bobtail squid: A beautiful example of ecology
            </>}
            subtitle={<>A tale of two phyla. The Special Relationship of biology.</>}
            tag="biology"
            author={<>by Edward Chen<br></br>figures by Jovana Andrejevic</>}
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
    );
}

export default Post;
