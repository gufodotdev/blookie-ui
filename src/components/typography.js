module.exports = {
  ".h1": {
    "@apply text-7xl/tight font-bold tracking-tight": {},
  },
  ".h2": {
    "@apply text-6xl/tight font-bold tracking-tight": {},
  },
  ".h3": {
    "@apply text-5xl/snug font-bold tracking-tight": {},
  },
  ".h4": {
    "@apply text-4xl/snug font-bold tracking-tight": {},
  },
  ".h5": {
    "@apply text-3xl/snug font-bold tracking-tight": {},
  },
  ".h6": {
    "@apply text-2xl/normal font-semibold tracking-tight": {},
  },
  ".h7": {
    "@apply text-xl/relaxed font-semibold tracking-tight": {},
  },
  ".h8": {
    "@apply text-lg/relaxed font-semibold tracking-tight": {},
  },
  ".h9": {
    "@apply text-base/relaxed font-semibold tracking-tight": {},
  },
  ".p": {
    "@apply text-muted-foreground": {},
    "@apply [.p:where(&:not(.p-sm,.p-base,.p-lg))]:p-base": {},
  },
  ".p-sm": {
    "@apply text-sm/6": {},
  },
  ".p-base": {
    "@apply text-base/7": {},
  },
  ".p-lg": {
    "@apply text-lg/8": {},
  },
};
