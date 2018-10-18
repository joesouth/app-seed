# Development Setup



There are two fundamental components of the Pull Request process: one concrete
and technical, and one more process oriented. The concrete and technical
component involves the specific details of setting up your local environment
so that you can make the actual changes. This is where we will start.

* [Prerequisites](#prerequisites)
  * [Global Dependencies](#global-dependencies)
  * [Project-specific dependencies](#project-specific-dependencies)
* [Setting up your local environment](#setting-up-your-local-environment)
  * [Step 1: Fork](#step-1-fork)
  * [Step 2: Branch](#step-2-branch)
* [The Process of Making Changes](#the-process-of-making-changes)
  * [Step 3: Code](#step-3-code)
  * [Step 4: Commit](#step-4-commit)
    * [Commit message guidelines](#commit-message-guidelines)
  * [Step 5: Rebase](#step-5-rebase)
  * [Step 6: Test](#step-6-test)
    * [Test Coverage](#test-coverage)
  * [Step 7: Push](#step-7-push)
  * [Step 8: Opening the Pull Request](#step-8-opening-the-pull-request)
* [Additional Notes](#additional-notes)
  * [Commit Squashing](#commit-squashing)


## Prerequisites <a class="toc" id="dependencies" href="#prerequisites"></a>

### Global Dependencies

The following is a list of required dependencies required for all [PSP 2.0 Projects](https://github.com/pspusa):

* Git:
  * [Install git](https://www.atlassian.com/git/tutorials/install-git)
  * [Git Cheatsheat](https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet)
* Node.js 8+ and npm 6+ (we recommend [nvm](https://github.com/creationix/nvm) for Mac/Linux, and [nvm-windows](https://github.com/coreybutler/nvm-windows) for windows)
* Global npm modules:
  * [Yarn](https://yarnpkg.com/en/docs/install): `npm i -g yarn`
  * [vue-cli](https://cli.vuejs.org/guide/installation.html): `yarn global add @vue/cli`
  * [VuePress](https://v0.vuepress.vuejs.org/): `npm i -g vuepress`


### Project-specific Dependencies

The following additional dependencies are required to work on this specific project:

*


## Setting up your local environment

To get started, make sure you've installed all required [prerequisites](#prerequisites). Depending on
your operating system, there are also a number of other dependencies required:



1. All [prerequisite dependencies](#prerequisites)
2. Additional dependencies...

### Step 1: Fork

Fork the project [on GitHub](https://github.com/pspusa/repo-template) and clone your fork
locally.

```text
$ git clone git@github.com:username/repo-template.git
$ cd node
$ git remote add upstream https://github.com/pspusa/repo-template.git
$ git fetch upstream
```

It is recommended to configure `git` so that it knows who you are:

```text
$ git config user.name "J. Random User"
$ git config user.email "j.random.user@example.com"
```

You can use any name/email address you prefer here. We only use the
metadata generated by `git` using this configuration for properly attributing
your changes to you in the `AUTHORS` file and the changelog.

If you would like for the Github UI to link the commit to your account
and award you the `Contributor` label after the changes have been merged,
make sure this local email is also added to your
[GitHub email list](https://github.com/settings/emails).

### Step 2: Branch

As a best practice to keep your development environment as organized as
possible, create local branches to work within. These should also be created
directly off of the `master` branch.

```text
$ git checkout -b my-branch -t upstream/master
```

## The Process of Making Changes

### Step 3: Code

Do yo' thing.

### Step 4: Commit

It is a recommended best practice to keep your changes as logically grouped
as possible within individual commits. There is no limit to the number of
commits any single Pull Request may have, and many contributors find it easier
to review changes that are split across multiple commits.

```text
$ git add my/changed/files
$ git commit
```

Note that multiple commits often get squashed when they are landed (see the
notes about [commit squashing](#commit-squashing)).

#### Commit message guidelines

A good commit message should describe what changed and why.

1. The first line should:
   - contain a short description of the change (preferably 50 characters or
     less, and no more than 72 characters)
   - be entirely in lowercase with the exception of proper nouns, acronyms, and
   the words that refer to code, like function/variable names
   - be prefixed with the name of the changed subsystem and start with an
   imperative verb. Check the output of `git log --oneline files/you/changed` to
   find out what subsystems your changes touch.

   Examples:
   - `net: add localAddress and localPort to Socket`
   - `src: fix typos in async_wrap.h`


2. Keep the second line blank.
3. Wrap all other lines at 72 columns (except for long URLs).

4. If your patch fixes an open issue, you can add a reference to it at the end
of the log. Use the `Fixes:` prefix and the full issue URL. For other references
use `Refs:`.

   Examples:
   - `Fixes: https://github.com/pspusa/repo-template/issues/1337`
   - `Refs: http://eslint.org/docs/rules/space-in-parens.html`
   - `Refs: https://github.com/pspusa/repo-template/pull/3615`

5. If your commit introduces a breaking change (`semver-major`), it should
contain an explanation about the reason of the breaking change, which
situation would trigger the breaking change and what is the exact change.

Sample complete commit message:

```txt
subsystem: explain the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way, `git log` will show things
nicely even when it is indented.

Fixes: https://github.com/pspusa/repo-template/issues/1337
Refs: http://eslint.org/docs/rules/space-in-parens.html
```

If you are new to contributing to Node.js, please try to do your best at
conforming to these guidelines, but do not worry if you get something wrong.
One of the existing contributors will help get things situated and the
contributor landing the Pull Request will ensure that everything follows
the project guidelines.

See [core-validate-commit](https://github.com/evanlucas/core-validate-commit) -
A utility that ensures commits follow the commit formatting guidelines.

### Step 5: Rebase

As a best practice, once you have committed your changes, it is a good idea
to use `git rebase` (not `git merge`) to synchronize your work with the main
repository.

```text
$ git fetch upstream
$ git rebase upstream/master
```

This ensures that your working branch has the latest changes from `pspusa/repo-template`
master.

### Step 6: Test

Additional documentation for running tests will be added later. For now, if a project contains tests you should be able to run `npm test`. To write tests, please use [TestCafe](https://github.com/DevExpress/testcafe) to write tests. This may be replaced at somepoint in the future, as additional research / experimentation is required.

### Step 7: Push

Once you are sure your commits are ready to go, with passing tests and linting,
begin the process of opening a Pull Request by pushing your working branch to
your fork on GitHub.

```text
$ git push origin my-branch
```

### Step 8: Opening the Pull Request

From within GitHub, opening a new Pull Request will present you with a template
that should be filled out:

```markdown
<!--
Thank you for your Pull Request. Please provide a description above and review
the requirements below.

Bug fixes and new features should include tests and possibly benchmarks.

Contributors guide: https://github.com/pspusa/repo-template/blob/master/CONTRIBUTING.md
-->
```

## Additional Notes

### Commit Squashing

In most cases, do not squash commits that you add to your Pull Request during
the review process. When the commits in your Pull Request land, they may be
squashed into one commit per logical change. Metadata will be added to the
commit message (including links to the Pull Request, links to relevant issues,
and the names of the reviewers). The commit history of your Pull Request,
however, will stay intact on the Pull Request page.

For the size of "one logical change",
[0b5191f](https://github.com/pspusa/repo-template/commit/0b5191f15d0f311c804d542b67e2e922d98834f8)
can be a good example. It touches the implementation, the documentation,
and the tests, but is still one logical change. All tests should always pass
when each individual commit lands on the master branch.