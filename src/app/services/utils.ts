import { AdvancedStats } from "../models/advanced-stats";
import { Player } from "../models/player";
import { Stats } from "../models/stats";
import { WorkRate } from "../models/work-rate";

export function convertToPlayer(item: any): Player {
    return {
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        name: item.name,
        height: item.height,
        weight: item.weight,
        gender: item.gender,
        birthDate: new Date(item.birthDate),
        age: item.age,
        position: item.position,
        foot: item.foot,
        weakFoot: item.weakFoot,
        skillMoves: item.skillMoves,
        rating: item.rating,
        color: item.color,
        workRate: { attack: item.attackWorkRate, defense: item.defenseWorkRate } as WorkRate,
        stats: {
            pace: item.pace,
            shooting: item.shooting,
            passing: item.passing,
            dribbling: item.dribbling,
            defending: item.defending,
            physicality: item.physicality
        } as Stats,
        advancedStats: {} as AdvancedStats,
        idNationality: item.nation,
        idClub: item.club
    };
};

export function convertToPlayerWithAdvancedStats(item: any): Player {
    return {
        id: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        name: item.name,
        height: item.height,
        weight: item.weight,
        gender: item.gender,
        birthDate: new Date(item.birthDate),
        age: item.age,
        position: item.position,
        foot: item.foot,
        weakFoot: item.weakFoot,
        skillMoves: item.skillMoves,
        rating: item.rating,
        color: item.color,
        workRate: {
            attack: item.attackWorkRate,
            defense: item.defenseWorkRate
        } as WorkRate,
        stats: {
            pace: item.pace,
            shooting: item.shooting,
            passing: item.passing,
            dribbling: item.dribbling,
            defending: item.defending,
            physicality: item.physicality
        } as Stats,
        advancedStats: {
            paceAttributes: {
                acceleration: item.acceleration,
                sprintSpeed: item.sprintSpeed
            },
            shootingAttributes: {
                positioning: item.positioning,
                finishing: item.finishing,
                shotPower: item.shotPower,
                longShots: item.longShots,
                volleys: item.volleys,
                penalties: item.penalties
            },
            passingAttributes: {
                vision: item.vision,
                crossing: item.crossing,
                freeKickAccuracy: item.freeKickAccuracy,
                shortPassing: item.shortPassing,
                longPassing: item.longPassing,
                curve: item.curve
            },
            dribblingAttributes: {
                agility: item.agility,
                balance: item.balance,
                reactions: item.reactions,
                ballControl: item.ballControl,
                dribbling: item.dribbling,
                composure: item.composure
            },
            defendingAttributes: {
                interceptions: item.interceptions,
                headingAccuracy: item.headingAccuracy,
                standingTackle: item.standingTackle,
                slidingTackle: item.slidingTackle,
                defenseAwareness: item.defenseAwareness
            },
            physicalityAttributes: {
                jumping: item.jumping,
                stamina: item.stamina,
                strength: item.strength,
                aggression: item.aggression
            },
            goalkeeperAttributes: {
                diving: item.diving,
                handling: item.handling,
                kicking: item.kicking,
                positioning: item.positioning,
                reflexes: item.reflexes
            }
        } as AdvancedStats,
        idNationality: item.nation,
        idClub: item.club
    };
};

