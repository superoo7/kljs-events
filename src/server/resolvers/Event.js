function organizer(parent, args, context) {
  return context.prisma.event({ id: parent.id }).organizer();
}

function venue(parent, args, context) {
  return context.prisma.event({ id: parent.id }).venue();
}

function attendees(parent, args, context) {
  return context.prisma.event({ id: parent.id }).attendees();
}

function talks(parent, args, context) {
  return context.prisma.event({ id: parent.id }).talks();
}

module.exports = {
  organizer,
  attendees,
  talks,
  venue
};
