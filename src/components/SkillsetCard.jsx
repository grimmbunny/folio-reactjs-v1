import StackIcon from "tech-stack-icons";

export default function SkillsetCard() {
  return (
    <div className="card skillset-card">
      <div className="card-body">
        <h3 className="card-title">Skillset</h3>
        {/* TOOLS */}
        <div className="tools-main mt-24">
          <div className="tools-slider gap-4">
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="ps" />
              </div>
              <h4 className="title fs-6 mb-0">Photoshop</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="id" />
              </div>
              <h4 className="title fs-6 mb-0">InDesign</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="ai" />
              </div>
              <h4 className="title fs-6 mb-0">Illustrator</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="ae" />
              </div>
              <h4 className="title fs-6 mb-0">InDesign</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="figma" />
              </div>
              <h4 className="title fs-6 mb-0">Figma</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="css3" />
              </div>
              <h4 className="title fs-6 mb-0">CSS</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="html5" />
              </div>
              <h4 className="title fs-6 mb-0">HTML</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="js" />
              </div>
              <h4 className="title fs-6 mb-0">JavaScript</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="bootstrap5" />
              </div>
              <h4 className="title fs-6 mb-0">Bootstrap</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="react" />
              </div>
              <h4 className="title fs-6 mb-0">React</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="github" />
              </div>
              <h4 className="title fs-6 mb-0">GitHub</h4>
            </div>
            <div className="expertise-item text-center">
              <div className="image mb-2">
                <StackIcon name="sass" />
              </div>
              <h4 className="title fs-6 mb-0">Sass</h4>
            </div>
          </div>
        </div>
        {/* SOFT SKILLS */}
        <div className="skills-main mt-4">
          <div className="skills-slider d-flex flex-wrap gap-2">
            <span className="skill-item badge ">multitasking</span>
            <span className="skill-item badge ">autonomia</span>
            <span className="skill-item badge ">visão 360º</span>
            <span className="skill-item badge ">flexibilidade</span>
            <span className="skill-item badge ">tech fluency</span>
            <span className="skill-item badge  ">growth mindset</span>
            <span className="skill-item badge  ">design thinking</span>
            <span className="skill-item badge  ">kanban</span>
          </div>
        </div>
      </div>
    </div>
  );
}
