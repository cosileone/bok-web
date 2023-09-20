import React from 'react';
import { TextField } from '~/components/Fields';
import { Button } from '~/components/Button';

const NewsletterMiniForm = () => {
  return (
      <form className="flex w-full justify-center md:w-auto">
        <TextField
          type="email"
          aria-label="Email address"
          placeholder="indirizzo email"
          autoComplete="email"
          required
          className="w-60 min-w-0 shrink"
        />
        <Button type="submit" color="blue" className="ml-4 flex-none">
          <span className="hidden lg:inline">Pre-Iscriviti Ora</span>
          <span className="lg:hidden">Pre-Iscriviti</span>
        </Button>
      </form>
  );
};

export default NewsletterMiniForm;
