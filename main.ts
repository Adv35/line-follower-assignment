basic.forever(function () {
    if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        maqueen.motorStop(maqueen.Motors.All)
        basic.pause(100)
    } else if (1 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 0 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
        basic.pause(100)
    } else if (0 == maqueen.readPatrol(maqueen.Patrol.PatrolLeft) && 1 == maqueen.readPatrol(maqueen.Patrol.PatrolRight)) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        basic.pause(100)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
        basic.pause(100)
    }
})
