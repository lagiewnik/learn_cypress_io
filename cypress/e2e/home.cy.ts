describe('empty spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  }
  )
  
  it('passes', () => {
    
    cy.get('[data-test="hero-heading"]').contains("Testing Next.js Applications with Cypress")
  })

  it('Features on homepage are correct', () => {
    
    cy.get("dt").eq(0).contains("4 Courses")
    cy.get("dt").eq(1).contains("25+ Lessons")
    cy.get("dt").eq(2).contains("Free and Open Source")

  });
})