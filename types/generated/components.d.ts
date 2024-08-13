import type { Struct, Schema } from '@strapi/strapi';

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    title: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    city: Schema.Attribute.String;
    state: Schema.Attribute.String;
    workSummery: Schema.Attribute.RichText;
  };
}

export interface SkillsSkills extends Struct.ComponentSchema {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    description: '';
  };
  attributes: {
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    universityName: Schema.Attribute.String;
    degree: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    description: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'experience.experience': ExperienceExperience;
      'skills.skills': SkillsSkills;
      'education.education': EducationEducation;
    }
  }
}
