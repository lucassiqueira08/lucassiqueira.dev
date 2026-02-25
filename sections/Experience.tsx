import { experience } from "~/constants";
import styles from "~/styles";

const Experience = () => (
  <section className="py-12 border-t border-[#e5e5e5]">
    <div className={styles.innerWidth}>
      <h2 className="text-xs font-medium text-[#737373] uppercase tracking-widest mb-6">
        Experience
      </h2>
      <div className="flex flex-col">
        {experience.map((item) => (
          <div
            key={item.company}
            className="-mx-4 px-4 py-4 rounded-lg transition-colors duration-150 hover:bg-[#fafafa]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-2 min-w-0">
                <span className="text-sm font-medium text-[#171717] shrink-0">
                  {item.company}
                </span>
                <span className="text-sm text-[#737373] truncate">{item.role}</span>
              </div>
              <span className="text-sm text-[#737373] shrink-0">{item.period}</span>
            </div>
            <p className="text-sm text-[#737373] mt-1 leading-6">
              {item.description}
            </p>
            {"phases" in item && item.phases && (
              <div className="mt-4 flex flex-col gap-4">
                {item.phases.map((phase) => (
                  <div key={phase.role}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-medium text-[#525252]">{phase.role}</span>
                      <span className="text-xs text-[#a3a3a3]">{phase.period}</span>
                    </div>
                    <div className="mt-2 flex flex-col gap-2">
                      {phase.projects.map((project) => (
                        <p key={project.name} className="text-xs text-[#a3a3a3] leading-6">
                          <span className="text-[#737373]">{project.name}</span>
                          {" — "}
                          {project.description}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <details className="mt-3 group">
              <summary className="text-xs text-[#737373] cursor-pointer select-none list-none hover:text-[#171717] transition-colors duration-150">
                <span className="group-open:hidden">+ skills</span>
                <span className="hidden group-open:inline">− skills</span>
              </summary>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs text-[#737373] bg-[#f5f5f5] px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
