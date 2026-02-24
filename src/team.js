export function setupTeamSectionAnimations({ gsap, ScrollTrigger }) {
  if (!gsap || !ScrollTrigger) return

  const teamSection = document.querySelector('.cc-team')
  if (!teamSection) return

  const headerColumns = teamSection.querySelectorAll('.row.row-justify-between > .col')
  const teamItems = teamSection.querySelectorAll('[data-component="team"] > *')

  if (headerColumns.length) {
    gsap.from(headerColumns, {
      autoAlpha: 0,
      y: 28,
      duration: 0.8,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: teamSection,
        start: 'top 78%',
        once: true,
      },
    })
  }

  if (teamItems.length) {
    teamItems.forEach((item, index) => {
      gsap.from(item, {
        autoAlpha: 0,
        y: '+=40',
        duration: 0.75,
        ease: 'power2.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true,
        },
      })
    })
  }
}
