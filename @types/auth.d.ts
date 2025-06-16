type Gender = '미정' | '남성' | '여성';

type Profile = {
  phone?: string;
  address?: string;
  birth?: string;
  gender?: Gender;
};

type Term = {
  agreeOfTerm: boolean;
  agreeFourteen: boolean;
  agreeOfService: boolean;
  agreeOfEvent?: boolean;
};

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: string;
  username: string;
  profile?: Profile;
  profileImg?: string[];
  term?: Term;
}
