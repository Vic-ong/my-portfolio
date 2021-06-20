export const codMatchSnippet = `
const codApi = require('call-of-duty-api')();
const ServiceCredentials = require('@/models/ServiceCredentials');

const login = async () => {
  const credential = await ServiceCredentials.getActiveCredential();
  await codApi.login(credential.email, credential.password);
};

const getPlayerName = (activisionId) => {
  const hashIndex = activisionId.lastIndexOf('#');
  return hashIndex === -1 ? activisionId : activisionId.substring(0, hashIndex);
};

const findFullMatch = async (id, platformId, activisionId) => {
  await login();
  const { platform } = platformId;
  const fullMatch = await codApi.MWFullMatchInfowz(id, codApi.platforms[platform]);
  const matchData = activisionId
    ? fullMatch.allPlayers.find((match) => match.player.username === getPlayerName(activisionId))
    : fullMatch.allPlayers;

  return {
    status: 200,
    body: {
      result: matchData,
    },
  };
};

const findUserMatch = async ({ user, startTime, endTime }) => {
  await login();
  try {
    const { platform, username } = user.platformId;
    const matchDetails = await codApi.MWcombatwzdate(username, startTime, endTime, codApi.platforms[platform]);
    if (!matchDetails || !matchDetails.matches) return undefined;

    return matchDetails.matches;
  } catch (err) {
    if (err === 'Incorrect username or platform') return undefined;
    throw err;
  }
};

const findClosestMatch = async ({ wager, partition, allPlayers = false }) => {
  const { user, mode } = wager;
  const { platformId } = user;
  const { startTime, endTime } = partition;

  // find the closest match
  const matches = await findUserMatch({ user, startTime, endTime });
  if (!matches) return undefined;

  const filteredMatches = matches.filter((match) => {
    const minTime = startTime / 1000;
    const maxTime = startTime / 1000 + 5 * 60;
    const withinPartition = match.utcStartSeconds > minTime && match.utcStartSeconds < maxTime;
    const modeMatches = match.mode === mode;
    return withinPartition && modeMatches;
  });

  if (filteredMatches.length === 0) return undefined;

  const closestMatch = filteredMatches.reduce((match, curr) => {
    return curr.utcStartSeconds < match.utcStartSeconds ? curr : match;
  });

  // returns the match info of the user/player
  if (!allPlayers) return closestMatch;

  // get the match info for all players
  const { matchID } = closestMatch;
  const fullMatch = await codApi.MWFullMatchInfowz(matchID, codApi.platforms[platformId.platform]);
  return {
    matchID,
    ...fullMatch,
  };
};
`;

export const matchDataSample = `
{
  "result": {
      "utcStartSeconds": 1605308998,
      "utcEndSeconds": 1605310606,
      "map": "mp_don3",
      "mode": "br_brsolo",
      "matchID": "16785135868854116640",
      "duration": 1608000,
      "playlistName": null,
      "version": 1,
      "gameType": "wz",
      "playerCount": 149,
      "playerStats": {
          "kills": 1,
          "medalXp": 0,
          "matchXp": 11073,
          "scoreXp": 1350,
          "wallBangs": 0,
          "score": 850,
          "totalXp": 12533,
          "headshots": 0,
          "assists": 0,
          "challengeXp": 0,
          "rank": 54,
          "scorePerMinute": 37.8619153674833,
          "distanceTraveled": 445189.4,
          "teamSurvivalTime": 1269792,
          "deaths": 2,
          "kdRatio": 0.5,
          "objectiveBrMissionPickupTablet": 1,
          "bonusXp": 0,
          "gulagDeaths": 0,
          "timePlayed": 1347,
          "executions": 0,
          "gulagKills": 1,
          "nearmisses": 0,
          "objectiveBrCacheOpen": 5,
          "percentTimeMoving": 63.930546,
          "miscXp": 0,
          "longestStreak": 1,
          "teamPlacement": 21,
          "damageDone": 450,
          "damageTaken": 200
      },
      "player": {
          "team": "team_seventy_one",
          "rank": 54,
          "awards": {},
          "username": "benchod94",
          "uno": "5016158669874098494",
          "brMissionStats": {
              "missionsComplete": 1,
              "totalMissionXpEarned": 500,
              "totalMissionWeaponXpEarned": 300,
              "missionStatsByType": {
                  "domination": {
                      "weaponXp": 300,
                      "xp": 500,
                      "count": 1
                  }
              }
          },
          "loadout": [
              {
                  "primaryWeapon": {
                      "name": "iw8_sn_delta",
                      "label": null,
                      "imageLoot": null,
                      "imageIcon": null,
                      "variant": "-1",
                      "attachments": [
                          {
                              "name": "scope",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          }
                      ]
                  },
                  "secondaryWeapon": {
                      "name": "iw8_pi_golf21",
                      "label": null,
                      "imageLoot": null,
                      "imageIcon": null,
                      "variant": "-1",
                      "attachments": [
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          },
                          {
                              "name": "none",
                              "label": null,
                              "image": null,
                              "category": null
                          }
                      ]
                  },
                  "perks": [
                      {
                          "name": "specialty_null",
                          "label": null,
                          "image": null,
                          "imageMainUi": null,
                          "imageProgression": null
                      },
                      {
                          "name": "specialty_null",
                          "label": null,
                          "image": null,
                          "imageMainUi": null,
                          "imageProgression": null
                      },
                      {
                          "name": "specialty_null",
                          "label": null,
                          "image": null,
                          "imageMainUi": null,
                          "imageProgression": null
                      }
                  ],
                  "extraPerks": [
                      {
                          "name": "null",
                          "label": null,
                          "image": null,
                          "imageMainUi": null,
                          "imageProgression": null
                      },
                      {
                          "name": "null",
                          "label": null,
                          "image": null,
                          "imageMainUi": null,
                          "imageProgression": null
                      },
                      {
                          "name": "null",
                          "label": null,
                          "image": null,
                          "imageMainUi": null,
                          "imageProgression": null
                      }
                  ],
                  "killstreaks": [
                      {
                          "name": "none",
                          "label": null
                      },
                      {
                          "name": "none",
                          "label": null
                      },
                      {
                          "name": "none",
                          "label": null
                      }
                  ],
                  "tactical": {
                      "name": "equip_flash",
                      "label": null,
                      "image": null,
                      "imageLarge": null,
                      "progressionImage": null
                  },
                  "lethal": {
                      "name": "equip_molotov",
                      "label": null,
                      "image": null,
                      "imageLarge": null,
                      "progressionImage": null
                  }
              }
          ]
      },
      "teamCount": 149,
      "rankedTeams": null,
      "draw": false,
      "privateMatch": false
  }
}
`;

export const sampleMatches = `
[
  13,
  8,
  7,
  7,
  10,
  16,
  10,
  19,
  5,
  7,
  8,
  7,
  10,
  11,
  12,
  7,
  6,
  17,
  15,
  17,
  21,
  6,
  6,
  20,
  9,
  13,
  11,
  7,
  5,
  10,
  12,
  7,
  4,
  10,
  9,
  10,
  2,
  9,
  17,
  14,
  17,
  24,
  18,
  18,
  18,
  16,
  2,
  13,
  8,
  13,
  10,
  6,
  2,
  15,
  10,
  9,
  4,
  14,
  13,
  17,
  7
]
`;
