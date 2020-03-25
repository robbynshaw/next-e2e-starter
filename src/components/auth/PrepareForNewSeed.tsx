import React from "react";
import routes from "@src/routes";
import { H1, H2 } from "@elements/Headers";
import Checkbox from "@elements/Checkbox";
import LinkButton from "@elements/LinkButton";
import Card from "@elements/Card";
import BlockQuote from "@elements/BlockQuote";

const PrepareForNewSeed = () => {
  const [totalChecked, setTotalChecked] = React.useState(0);
  console.log("total checked", totalChecked);

  const handleCheck = (key: string, val: boolean) => {
    if (val) {
      setTotalChecked(totalChecked + 1);
    } else {
      setTotalChecked(totalChecked - 1);
    }
  };

  return (
    <>
      <H1>Checklist</H1>
      <Card>
        <Checkbox value="pwd-mgr" onChange={handleCheck}>
          I have a <em>password manager</em> at the ready
          <BlockQuote>
            If you don't use one, maybe check out&nbsp;
            <a href="https://bitwarden.com/">Bitwarden</a>.
          </BlockQuote>
        </Checkbox>
        <Checkbox value="pnp" onChange={handleCheck}>
          I have some paper and pencil in front of me
          <BlockQuote>It's old-school, but it works</BlockQuote>
        </Checkbox>
        <LinkButton
          href={routes.auth.seed.generate}
          title="Create new seed"
          passHref
          disabled={totalChecked !== 2}
        >
          I'm Ready
        </LinkButton>
      </Card>

      <H2>More Info</H2>
      <Card>
        <p>
          You are about to create a <strong>backup phrase</strong>.
        </p>
        <BlockQuote>
          A backup phrase is a bunch of words that can be used to import your
          account into other computers and restore your account if you lose your
          password.
        </BlockQuote>
        <p>
          This app keeps you in control of your own, private data, so the backup
          phrase is <strong>really important</strong>. (
          <a href="https://en.bitcoin.it/wiki/Seed_phrase">Learn more</a>)
        </p>
      </Card>
    </>
  );
};

export default PrepareForNewSeed;
